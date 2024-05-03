package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.AccessorySize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IAccessorySizeRepository extends JpaRepository<AccessorySize, Integer>, JpaSpecificationExecutor<AccessorySize> {

}
