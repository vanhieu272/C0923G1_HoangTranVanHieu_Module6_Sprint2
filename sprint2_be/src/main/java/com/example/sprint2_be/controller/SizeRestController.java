package com.example.sprint2_be.controller;

import com.example.sprint2_be.model.Size;
import com.example.sprint2_be.service.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/size")
@CrossOrigin("*")

public class SizeRestController {
    @Autowired
    ISizeService sizeService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Size>> getALl(){
        if (sizeService.getAllSize() == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(sizeService.getAllSize(), HttpStatus.OK);
    }
    
}
