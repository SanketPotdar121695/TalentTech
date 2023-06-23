package com.ai.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InterviewSession {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sessionId;
	
	private LocalDateTime date;
	
	private String videoRec;
	
	@ManyToOne
	private Customer customer;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "interviewSession")
//	@JoinColumn(name= "session_id")
	List<Interview> queAnsList= new ArrayList<>();
	
}
