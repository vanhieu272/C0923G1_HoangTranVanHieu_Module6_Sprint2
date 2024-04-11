package com.example.sprint2_be.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String dayOfBirth;

    private Boolean gender;

    private String phoneNumber;

    private String address;

    private String image;

    private Boolean deleted;

    @OneToOne
    @JoinColumn
    private Account account;

}
