package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Category;
import com.example.sprint2_be.repository.ICategoryRepository;
import com.example.sprint2_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    ICategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }
}
