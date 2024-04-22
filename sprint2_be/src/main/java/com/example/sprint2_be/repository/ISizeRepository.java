package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISizeRepository extends JpaRepository<Size, Integer> {
}
