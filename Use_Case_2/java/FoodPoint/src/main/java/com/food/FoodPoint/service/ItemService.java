package com.food.FoodPoint.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.food.FoodPoint.entity.Item;
import com.food.FoodPoint.reposetery.ItemRepo;

@Service
public class ItemService {
	@Autowired
	private ItemRepo itemRepo;
	
	 public String addItem(String name,int qty,int cost ,MultipartFile file)  throws IOException{
		 Item item=new Item();
		   // String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		   // item.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
		    String s="";
		    item.setCost(cost);
		    item.setItemName(name);
		    item.setQuantity(qty);
		    itemRepo.save(item);
		    s="item added";
			return s;
		}
	
	 public String addItems(Item item) {
		 String s="";
		 itemRepo.save(item);
		 s="added";
		 return s;
	 }
	 
	 public List<Item> displayItems(){
			List<Item>list= itemRepo.findAll();
			return list;
		}
		
	 
	 public List<Item> searchItem(String itemName){
			List<Item>list=itemRepo.findAll();
			List<Item>searchedList=new ArrayList<Item>();
		     for(Item item:list) {
		    	 if((item.getItemName().toUpperCase()).contains(itemName.toUpperCase())) {
		    		 searchedList.add(item);
		    	 }
		     }  
		     return searchedList;
		}
	 
	 public String deleteItem(long id) {
			String s="";
			if(itemRepo.existsById(id)) {
				itemRepo.deleteById(id);
				s="deleted";
				
			}
			else {
				s="iten not exist";
			}
			return s;
		}
	 
	 public String updateQty(int quantity,long id) {
			
			String s="";
			System.out.println("qty "+quantity);
			int i=itemRepo.updateQuantity(quantity,id);
			if(i>0) {
				s="updated";
			}
			else {
				s="not updated";
			}
			return s;
		}
	 
	 public String updateCost(int cost,long id) {
			
		 String s="";
		 int i=itemRepo.updateCost(cost,id);
		 if(i>0) {
			 s="updated";
		 }
		 else {
		   	 s="not updated";
		 }
		 return s;
	 }

}
