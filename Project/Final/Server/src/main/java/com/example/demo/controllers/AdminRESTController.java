package com.example.demo.controllers;

import com.example.demo.message.request.AdminUserForm;
import com.example.demo.message.response.ResponseMessage;
import com.example.demo.models.Role;
import com.example.demo.models.RoleName;
import com.example.demo.models.User;
import com.example.demo.models.Student;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminRESTController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/users/{id}/roles")
    @Transactional
    public ResponseEntity<?> updateUserRoles(@PathVariable Long id, @RequestBody Set<String> rolesStr) {
        return userRepository.findById(id).map(user -> {
            Set<Role> roles = new HashSet<>();
            rolesStr.forEach(role -> {
                switch (role.toUpperCase()) {
                    case "ROLE_ADMIN":
                    case "ADMIN":
                        Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Admin Role not found."));
                        roles.add(adminRole);
                        break;
                    case "ROLE_MODERATOR":
                    case "MOD":
                    case "MODERATOR":
                        Role modRole = roleRepository.findByName(RoleName.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Moderator Role not found."));
                        roles.add(modRole);
                        break;
                    default:
                        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not found."));
                        roles.add(userRole);
                }
            });
            user.setRoles(roles);
            userRepository.save(user);
            return ResponseEntity.ok(new ResponseMessage("User roles updated successfully!"));
        }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/users")
    @Transactional
    public ResponseEntity<?> createAdminOrMod(@RequestBody AdminUserForm userForm) {
        try {
            if (userRepository.existsByUsername(userForm.getUsername())) {
                return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken."),
                        HttpStatus.BAD_REQUEST);
            }

            User user = new User(userForm.getUsername(), passwordEncoder.encode(userForm.getPassword()));
            Set<Role> roles = new HashSet<>();
            
            if (userForm.getRoles() == null || userForm.getRoles().isEmpty()) {
                roles.add(roleRepository.findByName(RoleName.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not found.")));
            } else {
                userForm.getRoles().forEach(role -> {
                    switch (role.toUpperCase()) {
                        case "ROLE_ADMIN":
                        case "ADMIN":
                            roles.add(roleRepository.findByName(RoleName.ROLE_ADMIN)
                                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Admin Role not found.")));
                            break;
                        case "ROLE_MODERATOR":
                        case "MOD":
                        case "MODERATOR":
                            roles.add(roleRepository.findByName(RoleName.ROLE_MODERATOR)
                                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: Moderator Role not found.")));
                            break;
                        default:
                            roles.add(roleRepository.findByName(RoleName.ROLE_USER)
                                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not found.")));
                    }
                });
            }

            user.setRoles(roles);
            userRepository.save(user);

            // Ensure a student record exists
            Student student = new Student();
            student.setUser(user);
            studentRepository.save(student);

            return ResponseEntity.ok(new ResponseMessage("User created successfully!"));
        } catch (Exception e) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/users/{id}/reset-password")
    @Transactional
    public ResponseEntity<?> resetPassword(@PathVariable Long id, @RequestBody(required = false) Map<String, String> body) {
        return userRepository.findById(id).map(user -> {
            user.setPasswordResetRequired(true);
            if (body != null && body.containsKey("newPassword") && !body.get("newPassword").isEmpty()) {
                user.setPassword(passwordEncoder.encode(body.get("newPassword")));
            }
            userRepository.save(user);
            return ResponseEntity.ok(new ResponseMessage("Password reset triggered for user: " + user.getUsername()));
        }).orElse(ResponseEntity.notFound().build());
    }
}
