package com.example.sprint2_be.service;

import com.example.sprint2_be.model.AccessorySize;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IAccessorySizeService {
    Page<AccessorySize> searchAccessory(String name, Float minPrice, Float maxPrice, Integer sizeId, String categoryName, Pageable pageable);
}
