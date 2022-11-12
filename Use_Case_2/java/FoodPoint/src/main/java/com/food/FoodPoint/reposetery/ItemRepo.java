package com.food.FoodPoint.reposetery;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.food.FoodPoint.entity.Item;

@Repository
public interface ItemRepo extends JpaRepository<Item, Long> {
	
	 @Modifying
	   @Transactional
     @Query("update Item set quantity=:quantity where id=:id")
     public int updateQuantity(int quantity,long id);

	
	 @Modifying
	 @Transactional
     @Query("update Item set cost=:cost where id=:id")
     public int updateCost(int cost,long id);


}
