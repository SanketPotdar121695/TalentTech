package com.ai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ai.exception.CustomerException;
import com.ai.model.Customer;
import com.ai.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Customer addCustomer(Customer customer) {
		
		if(customer == null) throw new CustomerException("Invalid Detailes");
		
		Optional<Customer> cus= customerRepository.findById(customer.getCustomerId());
		
		if(cus.isPresent()) throw new CustomerException("Customer is already present in the database");
		
		return customerRepository.save(customer);
//		return null;
	}


	@Override
	public Customer deleteCustomer(Integer customerId) {
		if(customerId==null || customerId==0)throw new CustomerException("Invalid CustomerId");
		Customer cust=customerRepository.findById(customerId).orElseThrow(()-> new CustomerException("Customer with CustomerId "+customerId+" does not exist"));
		customerRepository.delete(cust);
		return cust;
	}

	@Override
	public Customer getCustomerByEmail(String email) {
		if(email==null )throw new CustomerException("Invalid email");
		Customer cust=customerRepository.findByEmail(email);
		
		if(cust==null) throw new CustomerException("Customer Not Found With This email : "+ email);
		
		return cust;
	}

	
	
}
