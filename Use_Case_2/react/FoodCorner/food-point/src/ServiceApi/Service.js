import axios from "axios";
const FOOD_POINT_BACKEND_URL = "http://localhost:8080/login";
const ORDER_BACKEND_URL = "http://localhost:8080/order";
const ITEM_BACKEND_URL = "http://localhost:8080/item";



class ServiceApi {
  createAccount(cd) {
   // alert("cd "+cd.email)
    return axios.post(`${FOOD_POINT_BACKEND_URL}/user/`,cd);  
  }

  takeOrder(r) {
    //alert("cd "+cd.email)
    return axios.post(`${ORDER_BACKEND_URL}/take/`,r);
  }

  createAdminAccount(createDetail) { 
    return axios.post(`${FOOD_POINT_BACKEND_URL}/admin/`,createDetail);
  }

  deleteUserAccount(user) {
    return axios.put(`${FOOD_POINT_BACKEND_URL}/deletedUserAccount/`,user);
  }


  loginUser(email,upassword) {
    return axios.get(`${FOOD_POINT_BACKEND_URL}/loginUser/`,{ params: {
      email,
      upassword}})
  }

  loginAdmin(email,upassword) {
    return axios.get(`${FOOD_POINT_BACKEND_URL}/loginAdmin/`,{ params: {
      email,
      upassword}})
  }

  recoverPass(user) {
    return axios.put(`${FOOD_POINT_BACKEND_URL}/userPasswordRecover/`,user);
  }
  recoverAdminPass(admin) {
    return axios.put(`${FOOD_POINT_BACKEND_URL}/adminPasswordRecover/`,admin);
  }

  displayItems() {
    return axios.get(`${ITEM_BACKEND_URL}/displayItem/`);
  }

  // searchItem(itemName) {
  //   return axios.get(`${FOOD_POINT_BACKEND_URL}/searchItem/`,{ params: {
  //     itemName}}
  //     );
  // }

  addItem(name,qty,cost,file) {
    return axios.post(`${ITEM_BACKEND_URL}/AddItem/`,{ params: {name,qty,cost,
      file }});
  }

  addItems(item) {
    return axios.post(`${ITEM_BACKEND_URL}/AddItems/`,item);
  }
  searchItem(itemName) {
    return axios.get(`${ITEM_BACKEND_URL}/search/`,{ params: {
      itemName }});
  }

  deleteItem(id) {
    return axios.delete(`${ITEM_BACKEND_URL}/deleteItem/`+id
    );
  }

  updateQty(newItem) {
    return axios.put(`${ITEM_BACKEND_URL}/updateQty/`,newItem
    );
  }

  updateCost(newItem) {
    return axios.put(`${ITEM_BACKEND_URL}/updateCost/`,newItem
    );
  }


}

export default new ServiceApi();
