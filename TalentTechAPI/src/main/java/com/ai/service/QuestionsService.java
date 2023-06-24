package com.ai.service;

import java.util.List;

import com.ai.model.Questions;

public interface QuestionsService {

	public Questions addQustion(Questions que);
	
	public List<Questions> getQuestionsByType(String type);
	
}
