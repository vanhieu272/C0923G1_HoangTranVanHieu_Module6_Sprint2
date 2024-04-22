package com.example.sprint2_be.model;

import jakarta.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer quantity;

    private Double price;

    @ManyToOne
    @JoinColumn
    private Accessory accessory;

    @ManyToOne
    @JoinColumn
    private User user;

    public Cart() {
    }

    public Cart(Integer id, Integer quantity, Double price, Accessory accessory, User user) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.accessory = accessory;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Accessory getAccessory() {
        return accessory;
    }

    public void setAccessory(Accessory accessory) {
        this.accessory = accessory;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
