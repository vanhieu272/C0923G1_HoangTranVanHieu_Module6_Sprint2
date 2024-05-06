package com.example.sprint2_be.service;

import com.example.sprint2_be.model.AccessorySize;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;

import java.util.List;

public interface ICartService {
    List<Cart> getAllByUser(Integer id);

    void setCart(Integer index, Integer id);

    void createCart(User user, AccessorySize accessorySize, Integer quantity);

    void deleteById(Integer id);

    void deleteByUser(User user);
}
