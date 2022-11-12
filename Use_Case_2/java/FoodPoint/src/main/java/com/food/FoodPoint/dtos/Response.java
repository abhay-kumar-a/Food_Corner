package com.food.FoodPoint.dtos;

public class Response {

	private long id;
	private String email;
	private String upassword;
	private long phoneNo;
	

	
	
	public Response(long id, String email, long phoneNo) {
		super();
		this.id = id;
		this.email = email;
		this.phoneNo = phoneNo;
	}

	public Response(long id, String email, String upassword, long phoneNo) {
		super();
		this.id = id;
		this.email = email;
		this.upassword = upassword;
		this.phoneNo = phoneNo;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUpassword() {
		return upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Response(long id) {
		super();
		this.id = id;
	}

	@Override
	public String toString() {
		return "Response [id=" + id + "]";
	}
	
	

	
	
}
