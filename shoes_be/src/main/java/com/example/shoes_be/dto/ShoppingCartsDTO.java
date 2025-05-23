package com.example.shoes_be.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShoppingCartsDTO {

    private Integer cartId;
    private BigDecimal totals;
    private BigDecimal amount;
    private Integer userId;
    private List<CartItemsDTO> cartItems;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
