package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.AccessorySize;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAccessoryRepository extends JpaRepository<Accessory, Integer>, JpaSpecificationExecutor<Accessory> {

}