package com.example.shoes_be.service;

import com.example.shoes_be.dto.ReviewersDTO;

public interface ReviewersService {
    ReviewersDTO createReview(ReviewersDTO reviewersDTO, Integer orderItemId);
}
