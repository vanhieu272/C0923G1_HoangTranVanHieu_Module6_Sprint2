package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAccesoryService {
    Page<Accessory> searchAccessory(String name, Float minPrice, Float maxPrice, String category, String size, Pageable pageable);

   List<Accessory> getNewAccessory();

   List<Accessory>getFeatureAccessory();
}
