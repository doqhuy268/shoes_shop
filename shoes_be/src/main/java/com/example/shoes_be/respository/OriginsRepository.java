package com.example.shoes_be.respository;

import com.example.shoes_be.entity.Origins;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OriginsRepository extends JpaRepository<Origins, Integer> {
}
