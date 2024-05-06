package com.example.sprint2_be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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

    @Column(columnDefinition = "LONGTEXT", length = 1500)
    private String description;

    private Boolean deleted;

    private String thumbnailImg;

    @ManyToOne
    @JoinColumn
    private Category category;

    @OneToMany(mappedBy = "accessory", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Image> imageList;


    @OneToMany(mappedBy = "accessory")
    @JsonBackReference
    List<AccessorySize> accessorySizeList;

}
