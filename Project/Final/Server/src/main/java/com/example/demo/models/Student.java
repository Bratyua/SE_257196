package com.example.demo.models;

import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;

    private float points;

    @ManyToOne
    @JoinColumn(name = "ola_no")
    private OLAAgreement olaAgreement;

    @ManyToOne
    @JoinColumn(name = "dest_uni_id")
    private DestUni destUni;

    @Column(length = 10)
    private String olaStatus;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public float getPoints() {
        return points;
    }

    public void setPoints(float points) {
        this.points = points;
    }

    public OLAAgreement getOlaAgreement() {
        return olaAgreement;
    }

    public void setOlaAgreement(OLAAgreement olaAgreement) {
        this.olaAgreement = olaAgreement;
    }

    public DestUni getDestUni() {
        return destUni;
    }

    public void setDestUni(DestUni destUni) {
        this.destUni = destUni;
    }

    public String getOlaStatus() {
        return olaStatus;
    }

    public void setOlaStatus(String olaStatus) {
        this.olaStatus = olaStatus;
    }
}
