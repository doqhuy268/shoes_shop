package com.example.shoes_be.service;

import com.example.shoes_be.dto.UsersDTO;
import com.example.shoes_be.entity.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {
    UsersDTO getUserInfo(Integer userId);

    List<UsersDTO> getAllUsers();
    UsersDTO getUserById(Integer userId);
    UsersDTO createUser(UsersDTO userDto);
    UsersDTO updateUser(Integer userId, UsersDTO userDto);
    void deleteUser(Integer userId);
}
