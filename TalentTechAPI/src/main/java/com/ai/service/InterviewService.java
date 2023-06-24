package com.ai.service;

import com.ai.model.Interview;

public interface InterviewService {

	public Interview addInterToSession(Integer sessionId, Interview interview);
}
