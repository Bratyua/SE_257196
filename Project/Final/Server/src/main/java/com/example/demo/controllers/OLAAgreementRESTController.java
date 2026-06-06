package com.example.demo.controllers;

import com.example.demo.models.OLAAgreement;
import com.example.demo.models.DestUni;
import com.example.demo.repository.OLAAgreementRepository;
import com.example.demo.repository.DestUniRepository;
import com.example.demo.message.response.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ola-agreements")
public class OLAAgreementRESTController {
    @Autowired
    OLAAgreementRepository olaAgreementRepository;
    @Autowired
    DestUniRepository destUniRepository;

    @GetMapping
    public List<OLAAgreement> getAllAgreements() {
        return olaAgreementRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    @org.springframework.transaction.annotation.Transactional
    public ResponseEntity<?> addAgreement(@RequestBody Map<String, Object> payload) {
        try {
            int olaNo = Integer.parseInt(payload.get("olaNo").toString());
            String name = (String) payload.get("name");
            Long destUniId = Long.valueOf(payload.get("destUniId").toString());
            
            DestUni destUni = destUniRepository.findById(destUniId)
                    .orElseThrow(() -> new RuntimeException("Error: Destination University not found."));

            OLAAgreement agreement = olaAgreementRepository.findById(olaNo).orElse(new OLAAgreement());
            agreement.setOlaNo(olaNo);
            agreement.setName(name);
            agreement.getDestUnis().add(destUni);
            
            olaAgreementRepository.save(agreement);
            return ResponseEntity.ok(new ResponseMessage("OLA Agreement updated/added successfully with university!"));
        } catch (Exception e) {
            return new ResponseEntity<>(new ResponseMessage(e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{olaNo}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteAgreement(@PathVariable int olaNo) {
        olaAgreementRepository.deleteById(olaNo);
        return ResponseEntity.ok(new ResponseMessage("OLA Agreement deleted successfully!"));
    }
}
