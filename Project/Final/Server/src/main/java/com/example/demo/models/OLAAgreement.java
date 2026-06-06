package com.example.demo.models;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ola_agreement")
public class OLAAgreement {

    @Id
    @Column(name = "ola_no", unique = true, nullable = false)
    private int olaNo;

    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "ola_uni_map", 
               joinColumns = @JoinColumn(name = "ola_no"), 
               inverseJoinColumns = @JoinColumn(name = "uni_id"))
    private Set<DestUni> destUnis = new HashSet<>();

    public int getOlaNo() {
        return olaNo;
    }

    public void setOlaNo(int olaNo) {
        this.olaNo = olaNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<DestUni> getDestUnis() {
        return destUnis;
    }

    public void setDestUnis(Set<DestUni> destUnis) {
        this.destUnis = destUnis;
    }
}
