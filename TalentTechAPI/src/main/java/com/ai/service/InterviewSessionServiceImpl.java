package com.ai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ai.exception.CustomerException;
import com.ai.model.Customer;
import com.ai.model.InterviewSession;
import com.ai.repository.CustomerRepository;
import com.ai.repository.InterviewSessionRepository;

@Service
public class InterviewSessionServiceImpl implements InterviewSessionService{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private InterviewSessionRepository interviewSessionRepository;
	
	@Override
	public InterviewSession addInterviewSession(Integer customerId) {
		
		Optional<Customer> cus= customerRepository.findById(customerId);
		
		if(!cus.isPresent()) throw new CustomerException("Customer is not present in Database");
		
		InterviewSession createSession = new InterviewSession();
		
		createSession.setCustomer(cus.get());
		
		return createSession;
	}

}
