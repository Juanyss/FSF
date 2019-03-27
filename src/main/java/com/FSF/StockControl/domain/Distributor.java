package com.FSF.StockControl.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Distributor")
public class Distributor  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDistributor;

    private String name;
    private String brand;
    private String phone;
    private String email;
    private String type;


    public Distributor() {
    }

    public Distributor(String name, String brand, String phone, String email, String type) {
        this.name = name;
        this.brand = brand;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }

    public Long getIdDistributor() {
        return idDistributor;
    }

    public void setIdDistributor(Long idDistributor) {
        this.idDistributor = idDistributor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
