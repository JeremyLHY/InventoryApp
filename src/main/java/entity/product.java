package entity;
import java.time.LocalDateTime;



public class product {

    public enum ProductStatus {
        ACTIVE,
        INACTIVE,
        DISCONTINUED
    }

    private Long id;
    private String productName;
    private final String productCode;
    private String category;
    private Double price;
    private Integer quantity;
    private ProductStatus status;
    private LocalDateTime ProductCreatedAt;

    public product(String productName, String productCode, String category, Double price, Integer quantity, ProductStatus status) {
        this.productName = productName; 
        this.productCode = productCode;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }

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
        return ProductCreatedAt;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setProductCategory(String category) {
        this.category = category;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }
    

}
