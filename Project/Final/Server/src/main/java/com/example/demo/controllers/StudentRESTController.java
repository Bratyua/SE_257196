package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Student;
import com.example.demo.models.User;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.FacultyRepository;
import com.example.demo.repository.DestUniRepository;
import com.example.demo.repository.OLAAgreementRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("students")
public class StudentRESTController {
    private StudentRepository studentRepository;
    private FacultyRepository facultyRepository;
    private DestUniRepository destUniRepository;
    private OLAAgreementRepository olaAgreementRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public StudentRESTController(StudentRepository studentRepository,
            FacultyRepository facultyRepository,
            DestUniRepository destUniRepository,
            OLAAgreementRepository olaAgreementRepository,
            PasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.facultyRepository = facultyRepository;
        this.destUniRepository = destUniRepository;
        this.olaAgreementRepository = olaAgreementRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/me")
    public ResponseEntity<Student> getMyInfo(Authentication authentication) {
        if (authentication == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return studentRepository.findByUserUsername(authentication.getName())
                .map(student -> new ResponseEntity<>(student, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public List<Student> findAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Student> deleteStudent(@PathVariable("id") Long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (!student.isPresent()) {
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
        studentRepository.deleteById(id);
        return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student, @PathVariable("id") Long id) {
        if (studentRepository.existsById(id)) {
            student.setId(id);
            studentRepository.save(student);
            return new ResponseEntity<Student>(student, HttpStatus.OK);
        }
        studentRepository.save(student);
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Student> updatePartOfStudent(@RequestBody Map<String, Object> updates,
            @PathVariable("id") Long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (!student.isPresent()) {
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
        partialUpdate(student.get(), updates);
        return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<List<Student>> updateAllStudents(@RequestBody List<Student> students) {
        studentRepository.deleteAll();
        List<Student> savedStudents = studentRepository.saveAll(students);
        return new ResponseEntity<>(savedStudents, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentInfo(@PathVariable("id") Long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (!student.isPresent()) {
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Student>(student.get(), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllStudents() {
        studentRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private void partialUpdate(Student student, Map<String, Object> updates) {
        User user = student.getUser();
        if (updates.containsKey("name") || updates.containsKey("username")) {
            String newName = (String) (updates.containsKey("name") ? updates.get("name") : updates.get("username"));
            if (user != null) {
                user.setUsername(newName);
            }
        }
        if (updates.containsKey("password")) {
            if (user != null) {
                user.setPassword(passwordEncoder.encode((String) updates.get("password")));
            }
        }
        if (updates.containsKey("points")) {
            Float pts = toFloat(updates.get("points"));
            if (pts != null)
                student.setPoints(pts);
        }
        if (updates.containsKey("olaStatus")) {
            student.setOlaStatus((String) updates.get("olaStatus"));
        }
        if (updates.containsKey("facultyId")) {
            Long facultyId = toLong(updates.get("facultyId"));
            if (facultyId != null)
                facultyRepository.findById(facultyId).ifPresent(student::setFaculty);
        }
        if (updates.containsKey("destUniId")) {
            Long destUniId = toLong(updates.get("destUniId"));
            if (destUniId != null)
                destUniRepository.findById(destUniId).ifPresent(student::setDestUni);
        }
        if (updates.containsKey("olaNo")) {
            Integer olaNo = toInteger(updates.get("olaNo"));
            if (olaNo != null) {
                olaAgreementRepository.findById(olaNo).ifPresent(student::setOlaAgreement);
                student.setOlaStatus("PENDING");
            }
        }
        studentRepository.save(student);
    }

    private Long toLong(Object o) {
        if (o == null)
            return null;
        if (o instanceof Number)
            return ((Number) o).longValue();
        if (o instanceof String) {
            try {
                return Long.parseLong((String) o);
            } catch (NumberFormatException e) {
            }
            try {
                return (long) Double.parseDouble((String) o);
            } catch (NumberFormatException e) {
            }
        }
        return null;
    }

    private Integer toInteger(Object o) {
        if (o == null)
            return null;
        if (o instanceof Number)
            return ((Number) o).intValue();
        if (o instanceof String) {
            try {
                return Integer.parseInt((String) o);
            } catch (NumberFormatException e) {
            }
            try {
                return (int) Double.parseDouble((String) o);
            } catch (NumberFormatException e) {
            }
        }
        return null;
    }

    private Float toFloat(Object o) {
        if (o == null)
            return null;
        if (o instanceof Number)
            return ((Number) o).floatValue();
        if (o instanceof String) {
            try {
                return Float.parseFloat((String) o);
            } catch (NumberFormatException e) {
            }
        }
        return null;
    }
}
