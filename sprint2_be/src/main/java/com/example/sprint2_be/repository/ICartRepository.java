package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findAllByUserId(Integer id);

    @Query(value = "select * from cart where accessory_size_id = :idProduct and user_id = :idUser",nativeQuery = true)
    Cart getCartToCreate(Integer idProduct, Integer idUser );

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM cart WHERE user_id = :id", nativeQuery = true)
    void deleteByUser(@Param("id") Integer id);


}
