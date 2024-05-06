package com.example.sprint2_be.controller;


import com.example.sprint2_be.config.JwtUserDetails;
import com.example.sprint2_be.model.Bill;
import com.example.sprint2_be.model.BillDetail;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.service.IBillDetailService;
import com.example.sprint2_be.service.ICartService;
import com.example.sprint2_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/order")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
public class OrderRestController {
    @Autowired
    private IBillDetailService billDetailService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IUserService userService;


    @PostMapping("")
    public ResponseEntity<?> createOrder() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
        User user = userService.findByUsername(jwtUserDetails.getUsername());
        List<Cart> carts = cartService.getAllByUser(user.getId());
        try {
            ResponseEntity<?> res = billDetailService.createOrder(carts, user);
            if (res.getStatusCode() == HttpStatus.OK) {
                cartService.deleteByUser(user);
            }
            return res;
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("")
    public ResponseEntity<List<Bill>> getHistory() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
            User user = userService.findByUsername(jwtUserDetails.getUsername());
            List<Bill> list = billDetailService.getHistory(user.getId());
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/detail")
    public ResponseEntity<List<BillDetail>> getHistoryDetail(@RequestParam("id") Integer id) {
        try {
            List<BillDetail> list = billDetailService.getHistoryDetail(id);
            if (list.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
