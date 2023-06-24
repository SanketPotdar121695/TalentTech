package com.ai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.model.Interview;
import com.ai.service.InterviewServiceImpl;

@RestController
@RequestMapping("/talentTech")
@CrossOrigin("*")
public class InterviewController {

	@Autowired
	private InterviewServiceImpl service;
	
	
	@PostMapping("/registerInterview/{sessionId}")
	public ResponseEntity<Interview> registerQuestionsHandler(@PathVariable Integer sessionId,@RequestBody Interview interview){
		return new ResponseEntity<>(service.addInterToSession(sessionId, interview),HttpStatus.OK);
	}
	
}
