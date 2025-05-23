package com.example.shoes_be.service;

import com.example.shoes_be.dto.VouchersDTO;

import java.util.List;
import java.util.Optional;

public interface VouchersService {
    VouchersDTO createVoucher(VouchersDTO vouchersDTO);

    Optional<VouchersDTO> getVoucherById(Integer voucherId);

    List<VouchersDTO> getAllVouchers();

    VouchersDTO updateVoucher(Integer voucherId, VouchersDTO vouchersDTO);

    boolean deleteVoucher(Integer voucherId);
}
