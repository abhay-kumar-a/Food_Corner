package com.food.FoodPoint.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdminLogin {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	
	@Column(nullable =false ,unique = true )
	private String email;
	
	@Column(nullable = false)
	private String firstName;
	
	private String lastName;
	
	@Column(nullable = false)
	private long phoneNo;
	
	@Column(nullable = false)
	private String upassword;
	
	
	public AdminLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public AdminLogin(Long id, String email, String firstName, String lastName, long phoneNo, String upassword) {
		super();
		this.id = id;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNo = phoneNo;
		this.upassword = upassword;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getUpassword() {
		return upassword;
	}


	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	
	
}
