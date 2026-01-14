package com.jeremycode.inventory.controller;

import java.util.Collections;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeremycode.inventory.entity.User;
import com.jeremycode.inventory.service.DuplicateResourceException;
import com.jeremycode.inventory.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
public ResponseEntity<?> register(@RequestBody User user) {
    try {
        User savedUser = userService.register(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser); // 201 Created
    } catch (DuplicateResourceException e) {
        // Send proper error JSON with 409 Conflict
        return ResponseEntity.status(HttpStatus.CONFLICT)
                             .body(Collections.singletonMap("error", e.getMessage()));
    } catch (Exception e) {
        // Any other unexpected errors
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body(Collections.singletonMap("error", "Registration failed"));
    }
}


    // LOGIN
    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {
        return userService.login(request.getEmail(), request.getPassword());
    }
}