package com.jeremycode.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeremycode.inventory.entity.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByProductCode(String productCode);
}
