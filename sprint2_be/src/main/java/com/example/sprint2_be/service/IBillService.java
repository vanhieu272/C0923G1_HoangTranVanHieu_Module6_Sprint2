package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBillService {
    List<Bill> findAllByUserIdOrderByCreateDateAsc(Integer id);
}
