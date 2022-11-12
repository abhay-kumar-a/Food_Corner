package com.food.FoodPoint.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class OrderItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(nullable = false)
	private String selectedItemName;
	@Column(nullable = false)
	private int selectedItemCost;
	
	private String customerName;

	@Column(nullable = false)
	private String customerEmail;
	@Column(nullable = false)
	private long customerPhoneNo;
	
	public OrderItem(long id, String selectedItemName, int selectedItemCost, String customerName, String customerEmail,
			long customerPhoneNo) {
		super();
		this.id = id;
		this.selectedItemName = selectedItemName;
		this.selectedItemCost = selectedItemCost;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPhoneNo = customerPhoneNo;
	}


	public String getCustomerEmail() {
		return customerEmail;
	}


	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}


	public long getCustomerPhoneNo() {
		return customerPhoneNo;
	}


	public void setCustomerPhoneNo(long customerPhoneNo) {
		this.customerPhoneNo = customerPhoneNo;
	}


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public OrderItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSelectedItemName() {
		return selectedItemName;
	}
	public void setSelectedItemName(String selectedItemName) {
		this.selectedItemName = selectedItemName;
	}
	public int getSelectedItemCost() {
		return selectedItemCost;
	}
	public void setSelectedItemCost(int selectedItemCost) {
		this.selectedItemCost = selectedItemCost;
	}
	

	
	
}
