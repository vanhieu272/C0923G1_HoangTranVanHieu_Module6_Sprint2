package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.Category;
import com.example.sprint2_be.repository.IAccessoryRepository;
import com.example.sprint2_be.service.IAccesoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.criteria.Predicate;

@Service
public class AccessoryService implements IAccesoryService {
    @Autowired
    IAccessoryRepository accessoryRepository;

    @Override
    public Page<Accessory> searchAccessory(String name, Float minPrice, Float maxPrice, String category, String size, Pageable pageable) {
        Specification<Accessory> spec = (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            predicates.add(criteriaBuilder.equal(root.get("deleted"), false));

            if (size != null && !size.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("size"), size));
            }
            if (name != null && !name.isEmpty()) {
                predicates.add(criteriaBuilder.like(root.get("name"), "%" + name + "%"));
            }
            if (minPrice != null && maxPrice != null) {
                predicates.add(criteriaBuilder.between(root.get("price"), minPrice, maxPrice));
            }
            if (category != null && !category.isEmpty()) {
                predicates.add(criteriaBuilder.like(root.get("category").get("name"), "%" + category + "%"));
            }


            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        return accessoryRepository.findAll(spec, pageable);
    }

    @Override
    public List<Accessory> getNewAccessory(){
        return accessoryRepository.getNewAccessory();
    }

    @Override
    public List<Accessory> getFeatureAccessory() {
        return accessoryRepository.getFeatureAccessory();
    }

}
