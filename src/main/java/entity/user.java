package entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;


@Entity
@Table(name = "users")
public class user {
    
    @Id
    @Column(name = "ID")
    private Long id;
    
    @Column(name = "USERNAME")
    private String username;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt;



    public user(String username, String email, String password, String role) {
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
