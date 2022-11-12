package com.food.FoodPoint.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.springframework.web.multipart.MultipartFile;

@Entity
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(nullable = false)
	private String itemName;
	@Column(nullable = false)
	private int quantity;
	@Column(nullable = false)
	private int cost;
	
//	@Lob
//	@Column(nullable = false)
//	private String image;
//
//
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
//	public String getImage() {
//		return image;
//	}
//
//	public void setImage(String image) {
//		this.image = image;
//	}

	


	public Item(long id, String itemName, int quantity, int cost) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.quantity = quantity;
		this.cost = cost;
		
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	

	
}
