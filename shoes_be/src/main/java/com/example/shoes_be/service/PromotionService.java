package com.example.shoes_be.service;

import com.example.shoes_be.dto.PromotionsDTO;

import java.util.List;
import java.util.Optional;

public interface PromotionService {
    PromotionsDTO createPromotion(PromotionsDTO promotionsDTO);

    Optional<PromotionsDTO> getPromotionById(Integer promotionId);

    List<PromotionsDTO> getAllPromotions();

    PromotionsDTO updatePromotion(Integer promotionId, PromotionsDTO promotionsDTO);

    boolean deletePromotion(Integer promotionId);
}
