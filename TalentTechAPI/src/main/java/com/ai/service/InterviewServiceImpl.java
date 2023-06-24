package com.ai.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.ai.exception.CustomerException;
import com.ai.exception.TalentTechException;
import com.ai.model.Customer;
import com.ai.model.Interview;
import com.ai.model.InterviewSession;
import com.ai.model.Questions;
import com.ai.repository.CustomerRepository;
import com.ai.repository.InterviewRepository;
import com.ai.repository.InterviewSessionRepository;
import com.ai.repository.QuestionsRepository;

public class InterviewServiceImpl implements InterviewService{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private InterviewRepository interviewRepository;
	
	@Autowired
	private InterviewSessionRepository repo;
	
	@Autowired
	private QuestionsRepository quRepository;
	
	@Override
	public Interview addInterToSession(Integer sessionId, Interview interview) {
		Optional<InterviewSession> session= repo.findById(sessionId);
		
		if(!session.isPresent()) throw new CustomerException("SessionId is not present in Database");
		
		InterviewSession session1= session.get();
		
		List<Interview> list=session1.getQueAnsList();
		
		list.add(interview);

		
		Optional<Questions> q1= quRepository.findById(interview.getQuestionId());
		
		if(!q1.isPresent()) throw new TalentTechException("QuestionId is not present in Database");
		
		interview.setQuestions(q1.get());
		
		session1.setQueAnsList(list);
		
		
//		saving to session ------
		repo.save(session1);
		
		interviewRepository.save(interview);
		
		return interview;
	}

}
