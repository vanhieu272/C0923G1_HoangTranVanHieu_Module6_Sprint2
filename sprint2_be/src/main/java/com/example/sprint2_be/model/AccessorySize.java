package com.example.sprint2_be.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccessorySize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer quantity;

    @Column(columnDefinition = "int default 0")
    private Integer sold;

    private Double price;

    @ManyToOne
    @JoinColumn
    private Accessory accessory;

    @ManyToOne
    @JoinColumn
    private Size size;

}
