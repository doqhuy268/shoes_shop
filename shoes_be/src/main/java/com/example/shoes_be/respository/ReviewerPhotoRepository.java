package com.example.shoes_be.respository;

import com.example.shoes_be.entity.ReviewerPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewerPhotoRepository extends JpaRepository<ReviewerPhoto, Integer> {
}
