package com.jeremycode.inventory.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

    public enum ProductStatus {
        ACTIVE,
        INACTIVE,
        DISCONTINUED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "product_name")
    private String productName;

    @Column(nullable = false, unique = true, name = "product_code")
    private String productCode;

    @Column(nullable = false, name= "category")
    private String category;

    @Column(nullable = false, name= "price")
    private Double price;

    @Column(nullable = false, name= "quantity")
    private Integer quantity;

    @Column(nullable = false, name = "status")
    @Enumerated(EnumType.STRING)
    private ProductStatus status;

    @Column(name = "created_at")
    private LocalDateTime productCreatedAt = LocalDateTime.now();

    protected Product() {
    }

    public Product(String productName,
                   String productCode,
                   String category,
                   Double price,
                   Integer quantity,
                   ProductStatus status) {

        this.productName = productName;
        this.productCode = productCode;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }

    // ===== GETTERS =====

    public Long getId() {
        return id;
    }

    public String getProductName() {
        return productName;
    }

    public String getProductCode() {
        return productCode;
    }

    public String getCategory() {
        return category;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public LocalDateTime getProductCreatedAt() {
        return productCreatedAt;
    }

    // ===== SETTERS (only what should change) =====

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }
}
