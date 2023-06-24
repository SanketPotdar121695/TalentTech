package com.ai.service;

import com.ai.model.InterviewSession;

public interface InterviewSessionService {

	public InterviewSession addInterviewSession(Integer customerId);
	
	public InterviewSession addSession(InterviewSession customer);
	
}
