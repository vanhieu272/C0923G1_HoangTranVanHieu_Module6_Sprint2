package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBillRepository extends JpaRepository<Bill, Integer> {
    List<Bill> findAllByUserIdOrderByCreateDateAsc(Integer id);
}
