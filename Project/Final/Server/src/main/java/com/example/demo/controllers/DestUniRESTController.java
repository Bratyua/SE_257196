package com.example.demo.controllers;

import com.example.demo.models.DestUni;
import com.example.demo.repository.DestUniRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/universities")
public class DestUniRESTController {

    private final DestUniRepository destUniRepository;

    @Autowired
    public DestUniRESTController(DestUniRepository destUniRepository) {
        System.out.println("DestUniRESTController initialized");
        this.destUniRepository = destUniRepository;
    }

    @GetMapping
    public List<DestUni> getAllUniversities() {
        return destUniRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DestUni> addUniversity(@RequestBody DestUni university) {
        System.out.println("Adding university: " + university.getName() + " in " + university.getCity() + ", " + university.getCountry());
        try {
            DestUni savedUniversity = destUniRepository.save(university);
            System.out.println("University saved successfully with ID: " + savedUniversity.getId());
            return new ResponseEntity<>(savedUniversity, HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println("Error saving university: " + e.getMessage());
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUniversity(@PathVariable Long id) {
        destUniRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
