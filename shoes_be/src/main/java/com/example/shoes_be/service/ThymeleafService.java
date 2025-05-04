package com.example.shoes_be.service;

import com.example.shoes_be.entity.OrderItems;

public interface ThymeleafService {


    String generateInvoiceAndSendEmail(OrderItems orderItem);

}
