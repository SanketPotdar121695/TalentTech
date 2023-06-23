package com.ai.service;

import com.ai.model.Customer;

public interface CustomerService {

	public Customer addCustomer(Customer customer);
	public Customer deleteCustomer(Integer customerId);
	public Customer getCustomerByEmail(String user);
	
}
