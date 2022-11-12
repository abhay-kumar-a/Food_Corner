package com.food.FoodPoint.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.food.FoodPoint.entity.AdminLogin;
import com.food.FoodPoint.entity.OrderItem;
import com.food.FoodPoint.entity.Item;
import com.food.FoodPoint.entity.UserLogin;
import com.food.FoodPoint.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins ="http://localhost:3000")

public class LoginController {
	
	@Autowired
	private LoginService service;

	@PostMapping("/user")
	public String createAccount(@RequestBody UserLogin l) {
		
		return service.createAccount(l);
	}
	
	@PostMapping("/admin")
	public String createAdminAccount(@RequestBody AdminLogin al) {
		return service.createAdminAccount(al);
		
	}
	
	@GetMapping("/loginUser")
	public String userLogin(@RequestParam String email, @RequestParam String upassword) {
		return service.loginUser(email, upassword);
	}
	
	@GetMapping("/loginAdmin")
	public String adminLogin(@RequestParam String email, @RequestParam String upassword) {
		return service.loginAdmin(email, upassword);
	}
	
    
	 @PutMapping("/adminPasswordRecover")
	    public String adminPasswordRecovery(@RequestBody UserLogin user) {
	    	String email=user.getEmail();
	    	String upassword =user.getUpassword();
	    	return service.recoverPassword(upassword, email);
	    }
    @PostMapping("/addToCart")
    public String addToCart(@RequestBody OrderItem cart) {
    	return service.addItemToCart(cart);
    }
    
    @DeleteMapping("/deleteFromCart{id}")
    public String deleteFromCart(@PathVariable long id) {
    	return service.deleteFromcart(id);
    }
    
    @PutMapping("/deletedUserAccount")    
    public String  deleteUserAccount(@RequestBody UserLogin user) {
    	String email=user.getEmail();
    	String upassword=user.getUpassword();
    	return service.deleteUserAccount(email,upassword);
    }
    
    @PutMapping("/userPasswordRecover")
    public String userPasswordRecovery(@RequestBody UserLogin user) {
    	String email=user.getEmail();
    	String upassword =user.getUpassword();
    	return service.userPasswordRecovery(upassword, email);
    }
    
}
