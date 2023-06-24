package com.ai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.model.Questions;
import com.ai.service.QuestionServiceImpl;


@RestController
@RequestMapping("/talentTech")
@CrossOrigin("*")
public class QuestionsController {

	@Autowired
	private QuestionServiceImpl service;
	
	
	@PostMapping("/registerQuestion")
	public ResponseEntity<Questions> registerQuestionsHandler(@RequestBody Questions que){
		return new ResponseEntity<>(service.addQustion(que),HttpStatus.CREATED);
	}
	
	@GetMapping("/getQuestions/{type}")
	public ResponseEntity<List<Questions>> getListByTypeHandler(@PathVariable String type){
		return new ResponseEntity<List<Questions>>(service.getQuestionsByType(type),HttpStatus.OK);
	}
}
