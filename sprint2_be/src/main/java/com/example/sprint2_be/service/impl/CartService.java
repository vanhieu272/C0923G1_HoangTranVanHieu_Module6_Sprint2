package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.AccessorySize;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.repository.ICartRepository;
import com.example.sprint2_be.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    ICartRepository cartRepository;


    @Override
    public List<Cart> getAllByUser(Integer id) {
        return cartRepository.findAllByUserId(id);
    }

    @Override
    public void setCart(Integer index, Integer id) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (index == 0){
            cart.setPrice(cart.getAccessorySize().getPrice()*(cart.getQuantity()-1));
            cart.setQuantity(cart.getQuantity()-1);
            cartRepository.save(cart);
        }else {
            cart.setPrice(cart.getAccessorySize().getPrice()*(cart.getQuantity()+1));
            cart.setQuantity(cart.getQuantity()+1);
            cartRepository.save(cart);
        }
    }

    @Override
    public void createCart(User user, AccessorySize accessorySize, Integer quantity) {
        Cart cart = cartRepository.getCartToCreate(accessorySize.getId(),user.getId());
        if (cart == null){
            Cart newCart = new Cart();
            newCart.setPrice(accessorySize.getPrice()*quantity);
            newCart.setQuantity(quantity);
            newCart.setUser(user);
            newCart.setAccessorySize(accessorySize);
            cartRepository.save(newCart);
        }else {
            cart.setPrice(cart.getAccessorySize().getPrice()*(cart.getQuantity()+quantity));
            cart.setQuantity(cart.getQuantity()+quantity);
            cartRepository.save(cart);
        }
    }

    @Override
    public void deleteById(Integer id) {
        cartRepository.deleteById(id);
    }

    @Override
    public void deleteByUser(User user) {
        cartRepository.deleteByUser(user.getId());
    }
}
