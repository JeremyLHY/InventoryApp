package com.jeremycode.inventory.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME", nullable = false, unique = true)
    private String username;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @JsonIgnore // 2. Hide password from JSON responses
    @Column(name = "PASSWORD", nullable = false)
    private String password;

    // 3. This prevents the "Internal Server Error" during JSON conversion
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") 
    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();


    // Add no-arg constructor (REQUIRED by JPA)
    protected User() {
        
    }

    public User(String username, String email, String password) {
        this.username = username; 
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }
    
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = username;
    }

    

}
