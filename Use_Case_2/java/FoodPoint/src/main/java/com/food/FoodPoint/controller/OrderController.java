package com.food.FoodPoint.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.FoodPoint.entity.OrderItem;
import com.food.FoodPoint.service.OrderService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService service;
	
	@PostMapping("/take")
	public String takeOrder(@RequestBody List<OrderItem> r) {
		return service.takeOrder(r);
	}

}
