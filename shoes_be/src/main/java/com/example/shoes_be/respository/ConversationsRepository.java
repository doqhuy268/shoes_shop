package com.example.shoes_be.respository;

import com.example.shoes_be.entity.Conversations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationsRepository extends JpaRepository<Conversations, Integer> {
}
