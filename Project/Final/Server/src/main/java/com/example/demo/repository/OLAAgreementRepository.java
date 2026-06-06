package com.example.demo.repository;

import com.example.demo.models.OLAAgreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OLAAgreementRepository extends JpaRepository<OLAAgreement, Integer> {
}
