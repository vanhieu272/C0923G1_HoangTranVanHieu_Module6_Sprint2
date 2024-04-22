package com.example.sprint2_be.controller;

import com.example.sprint2_be.model.Category;
import com.example.sprint2_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/category")
public class CategoryRestController {
    @Autowired
    ICategoryService categoryService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Category>> getAllCategory(){
        if (categoryService.getAllCategory() == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(categoryService.getAllCategory(),HttpStatus.OK);
    }
}
