package com.ai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.model.InterviewSession;
import com.ai.service.InterviewSessionServiceImpl;


@RestController
@RequestMapping("/talentTech")
@CrossOrigin("*")
public class InterviewSessionController {

	@Autowired
	private InterviewSessionServiceImpl service;
	

	@PostMapping("/registerSession/{customerId}")
	public ResponseEntity<InterviewSession> registerSessionHandler(@PathVariable Integer customerId){
		return new ResponseEntity<>(service.addInterviewSession(customerId),HttpStatus.CREATED);
	}
	
}
