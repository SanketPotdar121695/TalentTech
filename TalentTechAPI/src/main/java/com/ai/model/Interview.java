package com.ai.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Interview {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer interviewId;
		
	private String userAns;
	
	private String chatGptAns;
	
	@ManyToOne
	private InterviewSession interviewSession;
	
//	@JoinColumn(name= "interview_id")
	@OneToOne(mappedBy = "interview",cascade = CascadeType.ALL)
	private Questions questions;
	
}
