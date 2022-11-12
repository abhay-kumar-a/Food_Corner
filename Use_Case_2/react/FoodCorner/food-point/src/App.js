import "./App.css";
import React from "react";
import { BrowserRouter , Routes, Route, Link, Router } from "react-router-dom";
import CreateAccount from "./Component/CreateAccount";
import Additem from "./Component/AddItem";
import ShowItem from "./Component/ShowItem";
import UserItem from "./Component/UserItem";
import OrderItem from "./Component/OrderItem";
import LoginCompo from "./Component/LoginCompo";
import Forgotpass from "./Component/Forgotpass";
import DeleteAccount from "./Component/DeleteAccount";
const list=new Array();
var userData="";
function App() {

  const getData=(data)=>{
       // alert("..."+data);
        userData=data;
  }
  const getItemdata=(data)=>{
    console.log(data);
    let orderItem={
      selectedItemName:data.selectedItemName,
        selectedItemCost:data.selectedItemCost,
        customerName:userData.name,
        customerEmail:userData.email,
        customerPhoneNo:userData.phoneNo,
    }
    list.push(orderItem);
    console.log(list);
  }
  return (
    <div>
      <div className="header">
        <h1 style={{ color: 'blue' , textAlign :"center"}}>FOOD POINT</h1>
        <div className="route" color="blue">
          <button>
          <Link to={'/'}> Logout</Link>
          </button>
    
        </div>
      </div>
    
      <Routes>
      <Route path="/" element={<LoginCompo onSubmit={getData}/>} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/ShowItem" element={<ShowItem />} />
      <Route path="/Additem" element={<Additem/>} />
      <Route path="/UserItem" element={<UserItem onSubmit={getItemdata}/>} />
      <Route path="/OrderItem" element={<OrderItem  dataItem={list}/>} />
      <Route path="/Forgotpass" element={<Forgotpass/>} />
      <Route path="/DeleteAccount" element={<DeleteAccount/>} />
</Routes>
     
    </div>
  );
}

export default App;
