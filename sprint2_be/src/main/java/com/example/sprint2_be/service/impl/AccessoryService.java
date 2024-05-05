package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.repository.IAccessoryRepository;
import com.example.sprint2_be.service.IAccesoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccessoryService implements IAccesoryService {
    @Autowired
    IAccessoryRepository accessoryRepository;

    @Override
    public Optional<Accessory> findById(Integer id) {
        return accessoryRepository.findById(id);
    }




//    @Override
//    public Page<Accessory> searchByNameOrCategory(String name) {
//        return accessoryRepository.searchByNameOrCategory(name);
//    }
}
