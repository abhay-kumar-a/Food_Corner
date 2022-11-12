import React from 'react'
import { useState } from 'react';
import Service from '../ServiceApi/Service';


var iQty=0;
export default function ShowItem() {
    const [open, setOpen] = React.useState(false);
    const [opendilog, setDilogOpen] = React.useState(false);


    const [newdata,setdata]=React.useState(iQty);
    const [sub,subm]=React.useState();
    const [items,setItems]=React.useState([]);
    const [name,setName]=React.useState();
    const [itemId,setId]=React.useState();
    const [newValue,setvalue]=React.useState();
    const [dilogValue,setDilogValue]=React.useState();

    const [itemName,setItemName]=React.useState();
    const [itemCost,setItemCost]=React.useState();
    const [itemQty,setItemQty]=React.useState();




const itemnameHandeler=(event)=>{
    setItemName(event.target.value);
}

const itemCostHandeler=(event)=>{
    setItemCost(event.target.value);
}

const itemQtyHandeler=(event)=>{
    setItemQty(event.target.value);
}
  
  const handleClickToOpen = (event) => {
    setId(event.target.id);
    setvalue(event.target.name);
    //alert(event.target.id);
    setDilogValue(event.target.value)
   // alert(event.target.value);
      
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };


  const changeDta=(event)=>{
    let searchItemname = name;
  if(newValue=='qty'){
    alert("update quantity");
    let newItem={
        id:itemId,
        quantity:dilogValue
       }
       if(window.confirm('Do you want update qty')){
        Service.updateQty(newItem).then((res) => {
        alert(res.data);
        if(!(searchItemname===undefined) || (searchItemname==='')){
            Service.searchItem(searchItemname).then((res)=>{
                setItems(res.data);
            });
        }else{
        Service.displayItems().then((res) => {
            setItems(res.data);
          }); 
        }
        setOpen(false);
      });
    }
  }else if(newValue=='cost'){
    alert("in cost");
    let newItem={
        id:itemId,
        cost:dilogValue
       }
       if(window.confirm('Do you want update qty')){
        Service.updateCost(newItem).then((res) => {
        alert(res.data); 
        if(!(searchItemname===undefined) || (searchItemname==='')){
            Service.searchItem(searchItemname).then((res)=>{
                setItems(res.data);
            });
        }else{
        Service.displayItems().then((res) => {
            setItems(res.data);
          }); 
        }
          setOpen(false);
      });
      
    }
   
  }

//alert(newValue);

  }

  const deletItem=(event)=>{
    let id=event.target.id;
    if(window.confirm('Do you want delete item')){
        Service.deleteItem(id).then((res) => {
        alert(res.data);
        Service.displayItems().then((res) => {
          setItems(res.data);
        }); 
      });
    }else{
        alert("not deleted");
      }
  }

  const submitData = (event) => {
    event.preventDefault();
   console.log(newdata+"   "+itemId)

   let newItem={
    id:itemId,
    quantity:dilogValue
   }
   console.log(newItem);
    if(window.confirm('Do you want update qty')){
        Service.updateQty(newItem).then((res) => {
        alert(res.data);
      });
    }else{
        alert("not updated ");
      }
    setOpen(false);
  };

  const displayItemss=()=>{
    Service.displayItems().then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  
    
  }


  const searchItem = (e) => {
    e.preventDefault();
    let searchItemname = name;
    alert(searchItemname);
    if(!(searchItemname===undefined) || (searchItemname==='')){
      
        //alert("inside search by name");
        Service.searchItem(searchItemname).then((res)=>{
            setItems(res.data);
        console.log(res.data);
        });
    
    }else{
       // alert("inside else");
        Service.displayItems().then((res) => {
            setItems(res.data);
            console.log(res.data);
          }); 
    }
    
 }; 

const addItem=(e)=>{
    alert("add item");
    e.preventDefault();
    let item={
      itemName:itemName,
      quantity:itemQty,
      cost:itemCost,
    }
        Service.addItems(item).then((res)=>{
            alert(res.data);
            Service.displayItems().then((res) => {
                setItems(res.data);
                console.log(res.data);
              });
              setName("");
            setDilogOpen(false);
         });
}

  const handelQty=(event)=>{
    setDilogValue(event.target.value);
      //console.log("qty"+newdata);
  }
  
  const handelName=(event)=>{
    setName(event.target.value);
    console.log("name"+name);
}

const openDilogBox=()=>{
    setItemName("");
    setItemCost("");
    setItemQty("");
    setDilogOpen(true);
}
const closeDilog=()=>{
    setDilogOpen(false);
}

  return (
    <div>
        <div className='top_btn'>
        <input 
            type="text"
            id="uNmae"
            value={name}   
            placeholder='search By name'     
            onChange={handelName}   
          />
          <button style={{marginLeft: 20}} onClick={searchItem}>Search</button>
       <button style={{marginLeft:20}} variant="outlined" color="primary" 
              onClick={openDilogBox}>Add new item
      </button>
      </div>
       <div>
       <div className='outer' style={{width:1270,marginLeft:130, marginTop:70}}>
      {items.map((itm) => (
            <div style={{display :'inline-block'}}>
              <div className='itemDiv' id={itm.id}>
              <h2  className='heading1' style={{ color:'navy'}}>{itm.itemName}</h2>
              <h3 className='heading1'>cost : { itm.cost}</h3>
              <h3 className='heading1'>Qty : { itm.quantity}</h3>


              </div>
              <div style={{ marginLeft:35}}>
              <button name="delete" id={itm.id} style={{ marginLeft:10}}  onClick={deletItem} >Delete</button>
              <button id={itm.id} name="qty" style={{ marginLeft:10}}  value={itm.quantity}  onClick={handleClickToOpen}>Quantity</button>
              <button id={itm.id} name="cost" style={{ marginLeft:10}} value={itm.cost} onClick={handleClickToOpen} >Cost</button>
              </div>
              </div>
            ))}
            </div>
            </div>

            <dialog open={open} onClose={handleToClose} className="dilogBox">
            <h2 style={{textAlign:'center' }}>Update </h2>

        <div style={{marginTop:50 , textAlign:'center' ,}}>
       
        <input className='inner-lable'
            type="text"
            id="quantity"
            value={dilogValue}   
            onChange={handelQty}             
          />
        </div>
          <button onClick={handleToClose}  color="primary"  autoFocus style={{marginTop:80 ,marginLeft:80 }}>
            Cancel</button>
          <button  id= {itemId} onClick={changeDta} color="primary" autoFocus style={{marginTop:80 ,marginLeft:20}}  >
            submit</button>
      </dialog>

      <dialog open={opendilog} onClose={openDilogBox}  className="dilogBox1">
      <div className=''>
        <form method='post' encType='multipart/form-data' style={{textAlign:'center'}}>
        <h2>Add new Item</h2>
      <label className='lable'>
        <p>Item Name</p>
        <input  className='inner-lable'
            type="text"
            id="itemName"
            onChange={itemnameHandeler}
            value={itemName}
          />
      </label>
      <label className='lable'> <p>Quantity</p>
        <input className='inner-lable'
            type="text"
            id="quantity"
            onChange={itemQtyHandeler}
            value={itemQty}
          />
      </label>
      <label className='lable'> <p>Cost</p>
        <input className='inner-lable'
            type="text"
            id="cost"
            onChange={itemCostHandeler}
            value={itemCost}
          />
      </label>
      <div>
        
       
      </div>
    </form>
  </div>
  <div style={{textAlign:'center'}}>
          <button style={{marginLeft:0}} onClick={closeDilog}  className="dilog_btn">
            Cancel</button>
          <button  onClick={addItem}  className="dilog_btn">
            Add Item</button>
            </div>
      </dialog>
    </div>
  )
}
