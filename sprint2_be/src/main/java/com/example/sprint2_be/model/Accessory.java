package com.example.sprint2_be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Accessory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private LocalDate releaseDay;

    private Double price;

    private Integer quantity;

    @Column(columnDefinition = "0")
    private Integer sold;

    private String size;

    @Column(columnDefinition = "LONGTEXT", length = 1500)
    private String description;

    private Boolean deleted;

    private String thumbnailImg;

    @ManyToOne
    @JoinColumn
    private Category category;

    @OneToMany(mappedBy = "accessory", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Image> imageList;





}
