package entity;

import java.time.LocalDateTime;

public class user {
    
    private Long id;
    private String username;
    private String email;
    private String password;
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
