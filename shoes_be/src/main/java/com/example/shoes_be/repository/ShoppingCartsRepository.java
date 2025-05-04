package com.example.shoes_be.repository;

import com.example.shoes_be.entity.ShoppingCarts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartsRepository extends JpaRepository<ShoppingCarts, Integer> {
}
