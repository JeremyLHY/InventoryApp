package com.jeremycode.inventory.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jeremycode.inventory.entity.Product;
import com.jeremycode.inventory.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product newProduct) {
        if (productRepository.existsByProductCode(newProduct.getProductCode())) {
            throw new IllegalArgumentException("Product with code " + newProduct.getProductCode() + " already exists.");
        }
        return productRepository.save(newProduct);
    }

     public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(Long id) {
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found"));
    }
    
    public Product update(Long id, Product updatedProduct) {
        Product existing = findById(id);

        existing.setProductName(updatedProduct.getProductName());
        existing.setCategory(updatedProduct.getCategory());
        existing.setPrice(updatedProduct.getPrice());
        existing.setQuantity(updatedProduct.getQuantity());
        existing.setStatus(updatedProduct.getStatus());

        return productRepository.save(existing);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}
