package com.example.sprint2_be.controller;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.service.IAccesoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/accessory")
public class AccessoryRestController {
    @Autowired
    IAccesoryService accessoryService;

    @GetMapping("/search")
    public ResponseEntity<Page<Accessory>> getAccessory (@RequestParam(required = false) String name,
                                                         @RequestParam(required = false, defaultValue = "0") Float minPrice,
                                                         @RequestParam(required = false, defaultValue = "9999999999") Float maxPrice,
                                                         @RequestParam(required = false) String size,
                                                         @RequestParam(defaultValue = "0") int page,
                                                         @RequestParam(defaultValue = "1") int pageSize){
        Pageable pageable = PageRequest.of(page, pageSize);
        if(name != null){
            name = name.trim();
        }
        Page<Accessory> accessoryPage = accessoryService.searchAccessory(name, minPrice, maxPrice, size, pageable);
        if(accessoryPage.getTotalPages() > 0){
            return ResponseEntity.ok().body(accessoryPage);
        }else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/getNewAccessory")
    public ResponseEntity<List<Accessory>> getNew(){
        List<Accessory> listNewAccessory = accessoryService.getNewAccessory();
        if(listNewAccessory == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listNewAccessory, HttpStatus.OK);
    }

    @GetMapping("/getFeatureAccessory")
    public ResponseEntity<List<Accessory>> getFeature(){
        List<Accessory> listFeatureAccessory = accessoryService.getFeatureAccessory();
        if(listFeatureAccessory == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listFeatureAccessory, HttpStatus.OK);
    }


}
