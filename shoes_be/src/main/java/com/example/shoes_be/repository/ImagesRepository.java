package com.example.shoes_be.repository;

import com.example.shoes_be.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Integer> {

    void deleteByProducts_ProductId(Integer productId);

}
