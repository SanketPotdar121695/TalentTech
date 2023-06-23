package com.ai.service;

import java.time.LocalDateTime;
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
		createSession.setDate(LocalDateTime.now());
		
		interviewSessionRepository.save(createSession);
		
		return createSession;
	}

	@Override
	public InterviewSession addSession(InterviewSession customer) {
		
		if(customer == null) throw new CustomerException("Invalid Detailes");
		
		Optional<Customer> cus= customerRepository.findById(customer.getSessionId());
		
		if(cus.isPresent()) throw new CustomerException("Customer is already present in the database");
		
		return interviewSessionRepository.save(customer);
//		return null;
	}
	

}
