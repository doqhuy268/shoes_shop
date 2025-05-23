package com.example.shoes_be.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "reviewer_photo")
@EntityListeners(AuditingEntityListener.class)
public class ReviewerPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer photoId;

    @Column(name = "path", nullable = false)
    private String path;

    @ManyToOne
    @JoinColumn(name = "reviewerId", nullable = false)
    private Reviewers reviewers;

    @CreatedDate
    @Column(name = "createdAt", updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updatedAt")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;

}
