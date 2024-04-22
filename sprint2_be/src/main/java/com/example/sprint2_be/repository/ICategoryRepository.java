package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
