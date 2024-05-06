package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.AccessorySize;
import com.example.sprint2_be.repository.IAccessorySizeRepository;
import com.example.sprint2_be.service.IAccessorySizeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class AccessorySizeService implements IAccessorySizeService {
    @Autowired
    IAccessorySizeRepository accessorySizeRepository;
    @Override
    public Page<AccessorySize> searchAccessory(String name, Float minPrice, Float maxPrice, Integer sizeId, String categoryName, Pageable pageable) {
        Specification<AccessorySize> spec = (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            predicates.add(criteriaBuilder.equal(root.get("accessory").get("deleted"), false));

//            if(name !=null && !name.isEmpty()){
//                predicates.add(criteriaBuilder.like(root.get("accessory").get("name"), "%" + name +"%"));
//            }
//
//            if(name !=null && !name.isEmpty()){
//                predicates.add(criteriaBuilder.like(root.get("accessory").get("category").get("name"), "%" + name + "%"));
//            }
//
//            if(name !=null && !name.isEmpty()){
//                predicates.add(criteriaBuilder.like(root.get("size").get("name"), "%" + name + "%"));
//            }
            if(name != null && !name.isEmpty()){
                Predicate namePredicate = criteriaBuilder.like(root.get("accessory").get("name"), "%" + name + "%");
                Predicate categoryPredicate = criteriaBuilder.like(root.get("accessory").get("category").get("name"), "%" + name + "%");

                predicates.add(criteriaBuilder.or(namePredicate, categoryPredicate));
            }

            if (sizeId != null) {
                predicates.add(criteriaBuilder.equal(root.get("size").get("id"), sizeId));
            }

            if (minPrice != null && maxPrice != null) {
                predicates.add(criteriaBuilder.between(root.get("price"), minPrice, maxPrice));
            }

            if(categoryName!=null){
                predicates.add(criteriaBuilder.like(root.get("accessory").get("category").get("name"), "%"+categoryName+"%"));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        return accessorySizeRepository.findAll(spec, pageable);
    }

    @Override
    public List<AccessorySize> getListSizesByAccessoryId(Integer id) {
        return accessorySizeRepository.getListSizesByAccessoryId(id);
    }

    @Override
    public List<AccessorySize> getLatestAccessory() {
        return accessorySizeRepository.getLatestAccessory();
    }

    @Override
    public List<AccessorySize> getFeatureAccessory() {
        return accessorySizeRepository.getFeatureAccessory();
    }


    @Override
    public AccessorySize getAccessorySize(Integer id) {
        return accessorySizeRepository.findById(id).orElse(null);
    }
}
