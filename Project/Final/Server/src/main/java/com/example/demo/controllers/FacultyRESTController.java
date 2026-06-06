package com.example.demo.controllers;

import com.example.demo.models.Faculty;
import com.example.demo.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faculties")
public class FacultyRESTController {

    private final FacultyRepository facultyRepository;

    @Autowired
    public FacultyRESTController(FacultyRepository facultyRepository) {
        System.out.println("FacultyRESTController initialized");
        this.facultyRepository = facultyRepository;
    }

    @GetMapping("/test/{id}")
    public String testParam(@PathVariable String id) {
        return "Faculty controller path variable test: " + id;
    }

    @GetMapping("/test")
    public String test() {
        return "Faculty controller is working!";
    }

    @GetMapping
    public List<Faculty> getAllFaculties() {
        return facultyRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Faculty> addFaculty(@RequestBody Faculty faculty) {
        System.out.println("Adding faculty: " + faculty.getName());
        try {
            Faculty savedFaculty = facultyRepository.save(faculty);
            System.out.println("Faculty saved successfully with ID: " + savedFaculty.getId());
            return new ResponseEntity<>(savedFaculty, HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println("Error saving faculty: " + e.getMessage());
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteFaculty(@PathVariable("id") Long id) {
        System.out.println("Deleting faculty with ID: " + id);
        try {
            facultyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.err.println("Error deleting faculty: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
