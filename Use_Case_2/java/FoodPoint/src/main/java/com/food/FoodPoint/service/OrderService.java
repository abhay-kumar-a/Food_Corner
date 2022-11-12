package com.food.FoodPoint.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.FoodPoint.entity.OrderItem;
import com.food.FoodPoint.reposetery.OrderRepo;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepo repo;
	
	public String takeOrder(List<OrderItem> r) {
		String s="";
		for(OrderItem o:r) {
			System.out.println("o");
			repo.save(o);
		}
		
		s="order placed";
		return s;
		
	}

}
