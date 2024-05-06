package com.example.sprint2_be.model;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    @Column(columnDefinition = "BIT DEFAULT 0")
    private Boolean deleted;

    private Double totalPrice;

    @Column(columnDefinition = "TIMESTAMP DEFAULT now()", updatable = false)
    private LocalDateTime createDate;

    @ManyToOne
    @JoinColumn
    private User user;
}
