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

import com.food.FoodPoint.entity.Item;
import com.food.FoodPoint.service.ItemService;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins ="http://localhost:3000")

public class ItemController {

	@Autowired
	private ItemService service;
	
	@PostMapping("/AddItem")
	public String addItem(@RequestParam String name, @RequestParam int qty, @RequestParam int cost ,@RequestParam  MultipartFile file ) throws IOException {
		return service.addItem(name,qty,cost,file);
	}
	
	@PostMapping("/AddItems")
	public String addItem(@RequestBody Item item )  {
		return service.addItems(item);
	}
	
	@GetMapping("/displayItem")
	public List<Item> displayItem(){
		return service.displayItems();
	}
	
	@GetMapping("/search")
	public List<Item> searchItem(@RequestParam String itemName){
		return service.searchItem(itemName);
	}
	
	@DeleteMapping("/deleteItem/{id}")
	public String deleteItem(@PathVariable long id) {
		return service.deleteItem(id);
	}
	
	
	@PutMapping("/updateQty")
	public String updateQty(@RequestBody Item item ) {
		int qty=item.getQuantity();
		long id=item.getId();
		System.out.println(qty+"    "+id );
		return service.updateQty(qty,id);
	}
	
    @PutMapping("/updateCost")	
	public String updateCost(@RequestBody Item item) {
    	int cost=item.getCost();
		long id=item.getId();
		return service.updateCost(cost,id);
	}
}
