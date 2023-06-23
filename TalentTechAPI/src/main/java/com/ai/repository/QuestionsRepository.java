package com.ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ai.model.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Integer>{

}
