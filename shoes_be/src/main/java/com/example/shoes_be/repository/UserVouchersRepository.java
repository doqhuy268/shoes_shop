package com.example.shoes_be.repository;

import com.example.shoes_be.entity.UserVouchers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserVouchersRepository extends JpaRepository<UserVouchers, Integer> {
}
