package com.ai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ai.model.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Integer>{

	public List<Questions> findByType(String type);
	
}
