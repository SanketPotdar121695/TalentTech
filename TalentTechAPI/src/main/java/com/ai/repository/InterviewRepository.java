package com.ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ai.model.Interview;

@Repository
public interface InterviewRepository extends JpaRepository<Interview, Integer>{

	
	
	
}
