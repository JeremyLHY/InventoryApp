package entity;

import java.time.LocalDateTime;

public class user {
    
    private Long id;
    private final String username;
    private final String email;
    private final String password;
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

}
