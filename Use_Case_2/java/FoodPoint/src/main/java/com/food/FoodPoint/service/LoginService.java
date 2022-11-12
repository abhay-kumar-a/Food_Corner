package com.food.FoodPoint.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.food.FoodPoint.dtos.Response;
import com.food.FoodPoint.entity.AdminLogin;
import com.food.FoodPoint.entity.OrderItem;
import com.food.FoodPoint.entity.Item;
import com.food.FoodPoint.entity.UserLogin;
import com.food.FoodPoint.reposetery.AdminRepo;
import com.food.FoodPoint.reposetery.OrderRepo;
import com.food.FoodPoint.reposetery.LoginRepo;
import com.food.FoodPoint.reposetery.ItemRepo;


@Service
public class LoginService {
	@Autowired
	private LoginRepo repo;
	@Autowired
	private AdminRepo adminRepo;
	
	
	
	@Autowired
	private OrderRepo cartRepo;
	
	public String createAccount(UserLogin l) {
		String s="";
		System.out.println("/////////////////"+l.getFirstName() +"//////"+l.getEmail());
		Response res=repo.getUserByEmail(l.getEmail());
		System.out.println("user Login"+res);
		if( res!=null) {
			s="this email is already registered";
		}
		else {
			repo.save(l);
			s="account created";
		}	
	return s;	
	}
	
	public String createAdminAccount(AdminLogin al) {
		String s="";
		Response res=adminRepo.getAdminByEmail(al.getEmail());
		System.out.println("user Login"+res);

		if(res!=null) {
			s="this id already registered";
		}
		else {
			adminRepo.save(al);

			s="account created";
		}
		return s;
	}
	
	
	public String loginUser(String email,String upassword) {
		String s="";
		Response res=repo.loginUser(email, upassword);
		System.out.println(res);
		if(res!=null) {
			System.out.println(res.getPhoneNo());

			s="login successfully"+"/"+res.getEmail()+"/"+res.getPhoneNo();
		}
		else {
			s="wrong userName/email or password";
		
		}
		return s;
	}
	
	
	
	 
	
	public String loginAdmin(String email,String upassword) {
		String s="";
		Response res=adminRepo.loginAdmin(email, upassword);
		System.out.println(res);
		if(res!=null) {
			s="login successfully";
		}
		else {
			s="wrong userName/email or password";
			
		}
		return s;
	}
	
    public String recoverPassword(String upassword,String email) {
    	String s="";
    		int i=adminRepo.recoverPassword(upassword, email);
    		if(i>0)
    		s="recoverd";
    		else 
    			s="this account not exist ";
    	return s;
    }
    
    public String readFeedBack() {
    	
    	return null;
    }
    
    public String giveFeedback(long id) {
    	return null;
    }
    
   
    
    public String addItemToCart(OrderItem cart) {
    	String s="";
    	cartRepo.save(cart);
    	s="added";
    	return s;
    }
    
    public String deleteFromcart(long id) {
    	
    	String s="";
    	if(cartRepo.existsById(id)) {
    		cartRepo.deleteById(id);
    		s="deleted";
    	}
    	else {
    		s="item not exist";
    	}
    	return s;
    }
    
    public String deleteUserAccount(String email,String upassword ) {
    	String s="";
		Response res=repo.loginUser(email, upassword);
        long id=0;
		if(res!=null) {
			 id=res.getId();
			repo.deleteById(id);
			if(repo.existsById(id)) {
	    		s="not deleted";
	    	}
	    	else {
	    		s="deleted";
	    	}
		}
		else {
			s="this account not exist";
		}
    	
    	return s;
    }
    
    public String userPasswordRecovery(String upassword,String email) {
    	String s="";
    		int i=repo.recoverPassword(upassword,  email);
    		if(i>0)
        		s="recoverd";
        		else 
        		s="this account not exist ";
    		
    	return s;
    }
}
