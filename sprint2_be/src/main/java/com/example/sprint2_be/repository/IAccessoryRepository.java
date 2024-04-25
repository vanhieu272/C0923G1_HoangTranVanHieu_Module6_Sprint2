package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Accessory;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAccessoryRepository extends JpaRepository<Accessory, Integer>, JpaSpecificationExecutor<Accessory> {

    @Query(nativeQuery = true, value = "SELECT * " +
            "FROM accessory " +
            "WHERE release_day <= CURDATE() " +
            "ORDER BY release_day DESC " +
            "LIMIT 12;")
    List<Accessory> getNewAccessory();


    @Query(nativeQuery = true, value = "SELECT * " +
            "FROM accessory " +
            "ORDER BY sold DESC " +
            "LIMIT 12;"
    )
    List<Accessory> getFeatureAccessory();

//    @Query(nativeQuery = true, value = "SELECT * FROM accessory as ac JOIN category as c on ac.category_id = c.id " +
//            "WHERE ac.name like concat('%', :name, '%') OR c.name like concat('%', :name, '%')")
//    Page<Accessory> searchByNameOrCategory(@Param("name") String name);

}