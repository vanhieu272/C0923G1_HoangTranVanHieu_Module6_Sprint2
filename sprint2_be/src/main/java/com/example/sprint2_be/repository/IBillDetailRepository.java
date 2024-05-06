package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBillDetailRepository extends JpaRepository<BillDetail, Integer> {
    List<BillDetail> findAllByBillId(Integer id);
}
