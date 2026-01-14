package com.jeremycode.inventory.service;

import org.springframework.stereotype.Service;

import com.jeremycode.inventory.entity.User;
import com.jeremycode.inventory.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

  public User register(User user) {
    if (userRepository.findByUsername(user.getUsername()).isPresent()) {
        // Throw the custom exception your controller is looking for
        throw new DuplicateResourceException("Username already exists");
    }

    if (userRepository.findByEmail(user.getEmail()).isPresent()) {
        // Throw the custom exception your controller is looking for
        throw new DuplicateResourceException("Email already exists");
    }

    return userRepository.save(user);
}

    // LOGIN
    public User login(String email, String password) {
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) 
            {
                throw new RuntimeException("Invalid password");
            }

    return user;
}

}
