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
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/accessory")
public class AccessoryRestController {
    @Autowired
    IAccesoryService accessoryService;


    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<Accessory>> findById(@PathVariable("id") Integer id){
        Optional<Accessory> accessory = accessoryService.findById(id);
        if(accessory == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(accessory, HttpStatus.OK);
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
