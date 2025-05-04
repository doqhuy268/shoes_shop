package com.example.shoes_be.repository;

import com.example.shoes_be.entity.Styles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StylesRepository extends JpaRepository<Styles, Integer> {
}
