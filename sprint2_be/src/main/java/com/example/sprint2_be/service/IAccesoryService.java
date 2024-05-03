package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Accessory;

import java.util.List;
import java.util.Optional;

public interface IAccesoryService {

   Optional<Accessory> findById(Integer id);

   List<Accessory> getNewAccessory();

   List<Accessory>getFeatureAccessory();

//    Page<Accessory> searchByNameOrCategory(String name);
}
