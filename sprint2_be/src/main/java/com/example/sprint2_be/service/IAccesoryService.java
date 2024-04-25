package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAccesoryService {
    Page<Accessory> searchAccessory(String name, Float minPrice, Float maxPrice, String size, Pageable pageable);

   List<Accessory> getNewAccessory();

   List<Accessory>getFeatureAccessory();

//    Page<Accessory> searchByNameOrCategory(String name);
}
