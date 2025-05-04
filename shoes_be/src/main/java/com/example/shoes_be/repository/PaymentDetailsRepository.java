package com.example.shoes_be.repository;

import com.example.shoes_be.entity.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Integer> {
    PaymentDetails findByOrderDetails_OrderDetailId(Integer orderDetailId);
}
