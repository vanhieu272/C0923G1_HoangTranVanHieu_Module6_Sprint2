package com.example.sprint2_be.service;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.AccessorySize;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IAccessorySizeService {
    Page<AccessorySize> searchAccessory(String name, Float minPrice, Float maxPrice, Integer sizeId, String categoryName, Pageable pageable);

    List<AccessorySize> getListSizesByAccessoryId(Integer id);

    List<AccessorySize> getLatestAccessory();

    List<AccessorySize> getFeatureAccessory();
}
