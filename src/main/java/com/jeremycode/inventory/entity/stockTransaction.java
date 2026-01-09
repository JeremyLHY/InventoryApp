// package com.jeremycode.inventory.entity;

// import java.time.LocalDateTime;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;


// @Entity
// @Table(name = "stock_transactions")
// public class stockTransaction {

//     private enum StockType{
//         IN,
//         OUT
//     }
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;


//     private Product product;
//     private StockType stockType;
//     private Integer quantity;
//     private String remark;
//     private LocalDateTime transactionCreated;

//     public stockTransaction(Product product, StockType stockType, Integer quantity, String remark) {
//         this.product = product; 
//         this.stockType = stockType;
//         this.quantity = quantity;
//         this.remark = remark;
//     }

//     public Long getId() {
//         return id;
//     }

//     public Product getProduct() {
//         return product;
//     }

//     public StockType getStockType() {
//         return stockType;
//     }

//     public Integer getQuantity() {
//         return quantity;
//     }

//     public String getRemark() {
//         return remark;
//     }

//     public LocalDateTime getTransactionCreated() {
//         return transactionCreated;
//     }

// }
