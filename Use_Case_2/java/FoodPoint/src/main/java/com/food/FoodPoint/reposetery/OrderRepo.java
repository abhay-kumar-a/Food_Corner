package com.food.FoodPoint.reposetery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.FoodPoint.entity.OrderItem;


@Repository
public interface OrderRepo extends JpaRepository<OrderItem, Long> {

}
