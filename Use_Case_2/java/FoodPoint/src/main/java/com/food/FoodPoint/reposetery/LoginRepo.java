package com.food.FoodPoint.reposetery;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.food.FoodPoint.dtos.Response;
import com.food.FoodPoint.entity.UserLogin;
@Repository
public interface LoginRepo extends JpaRepository<UserLogin, Long>{
  //  @Query("SELECT new com.Employee.Emp.EmployeeController.Response(e.empId,e.empName,d.deptName) FROM EmpMaster e JOIN e.deptNo d WHERE d.deptNo = :deptNo")

	
	@Query("SELECT new com.food.FoodPoint.dtos.Response(u.id) FROM UserLogin u where u.email=:email")
	public Response getUserByEmail(String email);
	
	@Query("SELECT new com.food.FoodPoint.dtos.Response(u.id,u.email,u.phoneNo) FROM UserLogin u where (u.email=:email OR u.firstName=:email)  AND u.upassword=:upassword")
	public Response loginUser(String email,String upassword);

	

	@Modifying
	@Transactional
    @Query("update UserLogin set upassword=:upassword where email=:email")
    public int recoverPassword(String upassword,String email);


	
}
