package entity;

import java.time.LocalDateTime;

public class stockTransaction {

    private enum StockType{
        IN,
        OUT
    }
    
    private Long id;
    private product product;
    private StockType stockType;
    private Integer quantity;
    private String remark;
    private LocalDateTime transactionCreated;

    public stockTransaction(product product, StockType stockType, Integer quantity, String remark) {
        this.product = product; 
        this.stockType = stockType;
        this.quantity = quantity;
        this.remark = remark;
    }

    public Long getId() {
        return id;
    }

    public product getProduct() {
        return product;
    }

    public StockType getStockType() {
        return stockType;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getRemark() {
        return remark;
    }

    public LocalDateTime getTransactionCreated() {
        return transactionCreated;
    }

}
