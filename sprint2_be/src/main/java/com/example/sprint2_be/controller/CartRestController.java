package com.example.sprint2_be.controller;

import com.example.sprint2_be.config.JwtUserDetails;
import com.example.sprint2_be.model.AccessorySize;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.service.IAccessorySizeService;
import com.example.sprint2_be.service.ICartService;
import com.example.sprint2_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/api/shopping")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
public class CartRestController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IAccessorySizeService accessorySizeService;

    @GetMapping("")
    public ResponseEntity<List<Cart>> getCart(HttpServletRequest httpServletRequest) {
        HttpSession session = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                List<Cart> carts = (List<Cart>) session.getAttribute("cart");
                return new ResponseEntity<>(carts, HttpStatus.OK);
            }
            JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
            User user = userService.findByUsername(jwtUserDetails.getUsername());
            return new ResponseEntity<>(cartService.getAllByUser(user.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> saveCartSession(@RequestBody Cart carts, HttpServletRequest httpServletRequest) {
        List<Cart> cartsList = new ArrayList<>();
        HttpSession httpSession = httpServletRequest.getSession();
        if (httpSession.getAttribute("cart") != null) {
            cartsList = (List<Cart>) httpSession.getAttribute("cart");
            int count = 0;
            for (int i = 0; i < cartsList.size(); i++) {
                if (carts.getAccessorySize().getId() == cartsList.get(i).getAccessorySize().getId()) {
                    cartsList.get(i).setPrice((cartsList.get(i).getQuantity() + carts.getQuantity())*cartsList.get(i).getAccessorySize().getPrice());
                    cartsList.get(i).setQuantity(cartsList.get(i).getQuantity() + carts.getQuantity());
                    count++;
                }
            }
            if (count == 0) {
                carts.setPrice(carts.getAccessorySize().getPrice()*carts.getQuantity());
                cartsList.add(carts);
            }
        } else {
            carts.setPrice(carts.getAccessorySize().getPrice()*carts.getQuantity());
            cartsList.add(carts);
            httpSession.setAttribute("cart", cartsList);

        }
        httpSession.setAttribute("cart", cartsList);
        return new ResponseEntity<>(httpSession.getAttribute("cart"), HttpStatus.OK);
    }

    @PostMapping("/{index}/{id}")
    public ResponseEntity<?> setCart(@PathVariable Integer index, @PathVariable Integer id,HttpServletRequest httpServletRequest) {
        List<Cart> cartsList = new ArrayList<>();
        HttpSession httpSession = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                cartsList = (List<Cart>) httpSession.getAttribute("cart");
                if (cartsList != null){
                    for (int i = 0; i < cartsList.size(); i++) {
                        if (cartsList.get(i).getAccessorySize().getId() == id){
                            if (index==0){
                                cartsList.get(i).setPrice(cartsList.get(i).getAccessorySize().getPrice()*(cartsList.get(i).getQuantity()-1));
                                cartsList.get(i).setQuantity(cartsList.get(i).getQuantity()-1);
                            }else {
                                cartsList.get(i).setPrice(cartsList.get(i).getAccessorySize().getPrice()*(cartsList.get(i).getQuantity()+1));
                                cartsList.get(i).setQuantity(cartsList.get(i).getQuantity()+1);
                            }
                        }
                    }
                }
                httpSession.setAttribute("cart", cartsList);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            cartService.setCart(index, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/create/{id}/{quantity}")
    public ResponseEntity<?> createCart( @PathVariable Integer id, @PathVariable Integer quantity) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
            AccessorySize accessorySize = accessorySizeService.getAccessorySize(id);
            User user = userService.findByUsername(jwtUserDetails.getUsername());
            cartService.createCart(user, accessorySize, quantity);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer id) {
        try {
            cartService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/deleteSession/{id}")
    public ResponseEntity<?> deleteCartToSession(@PathVariable Integer id,HttpServletRequest httpServletRequest) {
        List<Cart> cartsList = new ArrayList<>();
        HttpSession httpSession = httpServletRequest.getSession();
        if (httpSession.getAttribute("cart") != null) {
            cartsList = (List<Cart>) httpSession.getAttribute("cart");
            for (int i = 0; i < cartsList.size(); i++) {
                if (id == cartsList.get(i).getAccessorySize().getId()) {
                    cartsList.remove(i);
                }
            }
            httpSession.setAttribute("cart", cartsList);
            return new  ResponseEntity<>(HttpStatus.OK);
        }
        return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

}
