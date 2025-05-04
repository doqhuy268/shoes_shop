package com.example.shoes_be.respository;

import com.example.shoes_be.entity.ProductDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDetailsRepository extends JpaRepository<ProductDetails, Integer> {
    ProductDetails findByProducts_ProductIdAndSizes_SizeId(Integer productId, Integer sizeId);
    void deleteByProducts_ProductId(Integer productId);
}
