package com.food.FoodPoint.reposetery;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.food.FoodPoint.dtos.Response;
import com.food.FoodPoint.entity.AdminLogin;
@Repository
public interface AdminRepo extends JpaRepository<AdminLogin, Long>{
	
	@Query("SELECT new com.food.FoodPoint.dtos.Response(u.id) FROM AdminLogin u where u.email=:email")
	public Response getAdminByEmail(String email);
	
	@Query("SELECT new com.food.FoodPoint.dtos.Response(u.id) FROM AdminLogin u where (u.email=:email OR u.firstName=:email) AND u.upassword=:upassword")
	public Response loginAdmin(String email,String upassword);

	 @Modifying
	 @Transactional
     @Query("update AdminLogin set upassword=:upassword where email=:email")
     public int recoverPassword(String upassword,String email);

	
}
