package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Bill;
import com.example.sprint2_be.model.BillDetail;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IBillDetailService {
    ResponseEntity<?> createOrder(List<Cart> cart, User user);

    List<Bill> getHistory(Integer id);

    List<BillDetail> getHistoryDetail(Integer id);
}
