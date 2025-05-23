package com.example.shoes_be.respository;

import com.example.shoes_be.entity.Sizes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizesRepository extends JpaRepository<Sizes, Integer> {
}
