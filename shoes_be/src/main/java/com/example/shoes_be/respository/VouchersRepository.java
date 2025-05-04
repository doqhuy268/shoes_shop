package com.example.shoes_be.respository;

import com.example.shoes_be.entity.Vouchers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface VouchersRepository extends JpaRepository<Vouchers, Integer> {

}
