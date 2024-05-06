package com.example.sprint2_be.controller;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.AccessorySize;
import com.example.sprint2_be.service.IAccessorySizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/helios")
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")

public class AccesorySizeRestController {
    @Autowired
    IAccessorySizeService accessorySizeService;


    @GetMapping("/search")
    public ResponseEntity<Page<AccessorySize>> searchAccessory(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "0") Float minPrice,
            @RequestParam(required = false, defaultValue = "9999999999") Float maxPrice,
            @RequestParam(required = false, defaultValue = "1") Integer sizeId,
            @RequestParam(required = false, defaultValue = "") String categoryName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int pageSize,
            @RequestParam(defaultValue = "ASC") String sortDirection) {
        Pageable pageable;
        Sort.Direction direction = sortDirection.equalsIgnoreCase("DESC") ? Sort.Direction.DESC : Sort.Direction.ASC;
        if (direction == Sort.Direction.ASC) {
            pageable = PageRequest.of(page, pageSize, Sort.by(Sort.Order.asc("price")));
        } else {
            pageable = PageRequest.of(page, pageSize, Sort.by(Sort.Order.desc("price")));
        }

        name = name.trim();
        if (name.length() > 50) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Page<AccessorySize> accessoryPage = accessorySizeService.searchAccessory(name, minPrice, maxPrice, sizeId, categoryName, pageable);
        if (accessoryPage.getTotalPages() > 0) {
            return ResponseEntity.ok().body(accessoryPage);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

  @GetMapping("/find/{id}")
    public ResponseEntity<List<AccessorySize>> getListAccessoryByAccessoryId (@PathVariable("id") Integer id){
        List<AccessorySize> accessorySizes = accessorySizeService.getListSizesByAccessoryId(id);
        if(accessorySizes == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(accessorySizes, HttpStatus.OK);
  }

    @GetMapping("/getLatestAccessory")
    public ResponseEntity<List<AccessorySize>> getLatest(){
        List<AccessorySize> listNewAccessory = accessorySizeService.getLatestAccessory();
        if(listNewAccessory == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listNewAccessory, HttpStatus.OK);
    }

    @GetMapping("/getFeatureAccessory")
    public ResponseEntity<List<AccessorySize>> getFeature(){
        List<AccessorySize> listFeature = accessorySizeService.getFeatureAccessory();
        if(listFeature == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listFeature, HttpStatus.OK);
    }
}
