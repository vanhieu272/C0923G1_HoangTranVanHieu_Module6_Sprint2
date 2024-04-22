package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Size;
import com.example.sprint2_be.repository.ISizeRepository;
import com.example.sprint2_be.service.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeService implements ISizeService {
    @Autowired
    ISizeRepository sizeRepository;

    @Override
    public List<Size> getAllSize() {
        return sizeRepository.findAll();
    }
}
