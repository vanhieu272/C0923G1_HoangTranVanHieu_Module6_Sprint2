package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Bill;
import com.example.sprint2_be.model.BillDetail;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.repository.IBillDetailRepository;
import com.example.sprint2_be.repository.IBillRepository;
import com.example.sprint2_be.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Random;

@Service
public class BillDetailService implements IBillDetailService {
    @Autowired
    private IBillDetailRepository billDetailRepository;

    @Autowired
    private IBillRepository billRepository;

    @Override
    public ResponseEntity<?> createOrder(List<Cart> cart, User user) {
        boolean check =false;
        for (int i = 0; i < cart.size(); i++) {
            if(cart.get(i).getQuantity() > cart.get(i).getAccessorySize().getQuantity()){
                check= true;
            }
        }
        if (check ==true){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    "The number of products is not enough ! Please reduce the corresponding purchase amount !");
        }else {
            Bill bill = new Bill();
            bill.setUser(user);
            bill.setTotalPrice(0.0);
            billRepository.save(bill);
            Double price =0.0;
            for (int i = 0; i < cart.size(); i++) {
                BillDetail billDetail =new BillDetail();
                billDetail.setBill(bill);
                billDetail.setAccessorySize(cart.get(i).getAccessorySize());
                billDetail.setQuantity(cart.get(i).getQuantity());
                billDetail.setPrice(cart.get(i).getPrice());
                billDetail.getAccessorySize().setQuantity(billDetail.getAccessorySize().getQuantity() - billDetail.getQuantity());
                billDetailRepository.save(billDetail);
                price += cart.get(i).getPrice();
            }
            List<Bill> list=billRepository.findAll();
            long code;
            Random random = new Random();
            long min = 10000;
            long max = 99999;
            boolean flag;
            String orderCode;
            do {
                flag = true;
                code = random.nextLong() % (max - min + 1) + min;
                orderCode = "HEL-" + code;
                for (int i = 0; i < list.size(); i++) {
                    if (Objects.equals(list.get(i).getCode(), orderCode)) {
                        flag = false;
                    }
                }
            } while (!flag);
            bill.setCode(orderCode);
            bill.setTotalPrice(price);
            billRepository.save(bill);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @Override
    public List<Bill> getHistory(Integer id) {
        return billRepository.findAllByUserIdOrderByCreateDateAsc(id);
    }

    @Override
    public List<BillDetail> getHistoryDetail(Integer id) {
         return billDetailRepository.findAllByBillId(id);
    }
}
