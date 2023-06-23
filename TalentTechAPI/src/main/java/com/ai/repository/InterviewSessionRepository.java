package com.ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ai.model.InterviewSession;

@Repository
public interface InterviewSessionRepository extends JpaRepository<InterviewSession, Integer>{

	
	
}
