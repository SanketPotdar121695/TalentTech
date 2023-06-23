package com.ai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ai.exception.CustomerException;
import com.ai.model.Questions;
import com.ai.repository.QuestionsRepository;

@Service
public class QuestionServiceImpl implements QuestionsService{

	@Autowired
	private QuestionsRepository repo;
	
	@Override
	public Questions addQustion(Questions question) {
		
		if(question == null) throw new CustomerException("Invalid Detailes");
		
		Optional<Questions> cus= repo.findById(question.getQuestionId());
		
		if(cus.isPresent()) throw new CustomerException("Questions is already present in the database");
		
		return repo.save(question);
//		return null;
	}

}
