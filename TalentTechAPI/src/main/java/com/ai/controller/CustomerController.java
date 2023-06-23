package com.ai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.model.Customer;
import com.ai.service.CustomerServiceImpl;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/talentTech")
@CrossOrigin("*")
public class CustomerController {

	@Autowired
	private CustomerServiceImpl service;
	
	
	@PostMapping("/registerCustomers")
	public ResponseEntity<Customer> registerCustomerHandler(@Valid @RequestBody Customer customer){
		return new ResponseEntity<>(service.addCustomer(customer),HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/deleteCustomer/{custId}")
	public ResponseEntity<Customer> deleteCustomerHandler(@PathVariable("custId") Integer customerId){
		
		return new ResponseEntity<>(service.deleteCustomer(customerId),HttpStatus.GONE);
	}
	
	@GetMapping("/customer/{emailId}")
	public ResponseEntity<Customer> getCustomerByIdHandler(@PathVariable("emailId") String email){
		
		return new ResponseEntity<>(service.getCustomerByEmail(email),HttpStatus.OK);
	}
}
