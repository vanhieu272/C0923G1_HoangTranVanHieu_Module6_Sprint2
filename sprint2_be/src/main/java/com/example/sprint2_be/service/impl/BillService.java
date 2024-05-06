package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Bill;
import com.example.sprint2_be.repository.IBillRepository;
import com.example.sprint2_be.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService implements IBillService {
    @Autowired
    IBillRepository billRepository;

    @Override
    public List<Bill> findAllByUserIdOrderByCreateDateAsc(Integer id) {
        return billRepository.findAllByUserIdOrderByCreateDateAsc(id);
    }
}
