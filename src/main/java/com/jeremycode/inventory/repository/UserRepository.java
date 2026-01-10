package com.jeremycode.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeremycode.inventory.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
        boolean existsByUser(String email);

}
