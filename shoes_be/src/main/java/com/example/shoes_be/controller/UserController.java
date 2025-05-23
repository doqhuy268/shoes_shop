package com.example.shoes_be.controller;


import com.example.shoes_be.dto.UsersDTO;
import com.example.shoes_be.service.UserService;
import com.example.shoes_be.utils.JwtTokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/users")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/get-info")
    public ResponseEntity<UsersDTO> getUserInfo(@RequestHeader("Authorization") String token) {
        try {
            // Remove "Bearer " prefix if present
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }

            Integer userId = jwtTokenProvider.getUserIdFromToken(token);

            if (userId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            UsersDTO userInfo = userService.getUserInfo(userId);

            if (userInfo == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return ResponseEntity.ok(userInfo);
        } catch (Exception e) {
            log.error("Error fetching user info: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<List<UsersDTO>> getAllUsers() {
        try {
            List<UsersDTO> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            log.error("Error fetching all users: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/get")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<UsersDTO> getUserById(@RequestParam Integer id) {
        try {
            UsersDTO user = userService.getUserById(id);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            log.error("Error fetching user by id: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/create")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<UsersDTO> createUser(@RequestBody UsersDTO userDto) {
        try {
            UsersDTO newUser = userService.createUser(userDto);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            log.error("Error creating user: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PostMapping("/update")
    public ResponseEntity<UsersDTO> updateUser(
            @RequestParam("id") Integer id,
            @RequestBody UsersDTO userDTO) {
        System.out.println("Received ID: " + id);
        System.out.println("Received UserDTO: " + userDTO);
        try {
            UsersDTO updatedUser = userService.updateUser(id, userDTO);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            log.error("Error updating user: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/delete")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Void> deleteUser(@RequestParam Integer id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            log.error("Error deleting user: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}