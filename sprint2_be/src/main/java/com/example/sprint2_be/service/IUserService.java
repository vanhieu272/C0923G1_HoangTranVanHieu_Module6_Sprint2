package com.example.sprint2_be.service;

import com.example.sprint2_be.model.User;

public interface IUserService {
    User findByUsername(String username);

    User findByEmail(String email);

    void editUser(User user);

    User findById(Integer id);

    void saveNewPassword(User user);
}
