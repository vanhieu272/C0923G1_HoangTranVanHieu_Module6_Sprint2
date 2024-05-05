package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.Accessory;
import com.example.sprint2_be.model.AccessorySize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IAccessorySizeRepository extends JpaRepository<AccessorySize, Integer>, JpaSpecificationExecutor<AccessorySize> {

    @Query(nativeQuery = true, value = "SELECT * FROM accessory_size as acsi WHERE acsi.accessory_id = :id")
    List<AccessorySize> getListSizesByAccessoryId(@Param("id") Integer id);

    @Query(nativeQuery = true, value = "SELECT acsi.*, ac.id as id_accessory " +
            "FROM accessory_size as acsi " +
            "JOIN accessory as ac ON ac.id = acsi.accessory_id " +
            "WHERE ac.deleted = 0 " +
            "GROUP BY acsi.accessory_id " +
            "ORDER BY ac.release_day DESC " +
            "LIMIT 8")
    List<AccessorySize> getLatestAccessory();

    @Query(nativeQuery = true, value = "SELECT acsi.* , ac.id as id_accessory, SUM(sold) AS total_sold\n" +
            "FROM accessory_size as acsi\n" +
            "JOIN accessory as ac on ac.id = acsi.accessory_id\n" +
            "WHERE ac.deleted = 0\n" +
            "GROUP BY accessory_id\n" +
            "ORDER BY total_sold DESC " +
            "LIMIT 8"
    )
    List<AccessorySize> getFeatureAccessory();

}
