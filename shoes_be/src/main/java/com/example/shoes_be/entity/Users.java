package com.example.shoes_be.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Random;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@EntityListeners(AuditingEntityListener.class)
public class Users {

    public enum UserStatus {
        LAM_VIEC,
        NGHI_VIEC,
    }


    @Id
    @Column(name = "userId", nullable = false)
    private Integer userId;

    @Column(name = "userName", nullable = false)
    private String userName;


    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "birth")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birth;

    @Column(name = "fullName", nullable = false)
    private String fullName;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private UserStatus status;

    @CreatedDate
    @Column(name = "createdAt", updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updatedAt")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @Enumerated(EnumType.STRING)
    @JoinColumn(name = "roleId")
    private Roles roles;

    @PrePersist
    public void prePersist() {
        if (this.userId == null) {
            this.userId = generateUserId();
        }
    }

    private Integer generateUserId() {
        Random random = new Random();
        return 1031500000 + random.nextInt(10000000);
    }

    public Integer getRoleId() {
        return this.roles != null ? this.roles.getRoleId() : null;
    }
}
