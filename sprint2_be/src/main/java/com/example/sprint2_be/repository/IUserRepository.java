package com.example.sprint2_be.repository;

import com.example.sprint2_be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);

    User findByEmail(String email);

    @Modifying
    @Query(value = "UPDATE user SET password = :password WHERE id = :id", nativeQuery = true)
    void saveNewPassword(@Param("id") Integer id, @Param("password") String password);
}
