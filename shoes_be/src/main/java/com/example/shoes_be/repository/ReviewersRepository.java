package com.example.shoes_be.repository;

import com.example.shoes_be.entity.Reviewers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewersRepository extends JpaRepository<Reviewers, Integer> {
}
