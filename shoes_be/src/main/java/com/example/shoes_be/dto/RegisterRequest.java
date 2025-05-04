package com.example.shoes_be.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String fullName;
    private String password;
    private String phone;
    private String email;
    private String userName;
    private String role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
