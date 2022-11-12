import React, { createContext } from 'react'
import Service from '../ServiceApi/Service';
import { Link } from 'react-router-dom';
import QRCode from "qrcode.react";




var i=1;
var j=0;
var total=0;
var array=new Array();
var list=new Array();

export default function UserItem(props) {
    const [name,setName]=React.useState();
    const [items,setItems]=React.useState([]);
    const [opendilog, setDilogOpen] = React.useState(false);
    const [itemArray,setItemArray]=React.useState([]);

    const [selectedItem,setSelectedItem]=React.useState([]);


    




    const searchItem = (e) => {
        e.preventDefault();
        let searchItemname = name;
        alert(searchItemname);
        if(!(searchItemname===undefined) || (searchItemname==='')){
          
            alert("inside search by name");
            Service.searchItem(searchItemname).then((res)=>{
                setItems(res.data);
            console.log(res.data);
            });
        
        }else{
            alert("inside else");
            Service.displayItems().then((res) => {
                setItems(res.data);
                console.log(res.data);
              }); 
        }
        
     }; 



     const showCart=(event)=>{
        alert("show cart");
        alert(itemArray);
        setDilogOpen(true);
     }

     const addToCart=(event)=>{
        let n=event.target.id;
        let c=event.target.value;
        let q=event.target.name;
        alert(n+c+q);
       let item={
        name:n,
        cost:c,
        qty:q,
        id:i,
       }
       let listitem={
        selectedItemName:n,
        selectedItemCost:c,
       }
       setSelectedItem(item);
       list.push(listitem);
       array.push(item);
       props.onSubmit(listitem);

       setItemArray(array);
       i=i+1;
       total=total*1+c*1;
       //alert(total);
     }

     const handelName=(event)=>{
        setName(event.target.value);
        console.log("name"+name);
    }

    const openDilogBox=()=>{
        setDilogOpen(true);
    }

    
    const closeDilog=()=>{
        setDilogOpen(false);
    }

    

    
    const deleteItem=(event)=>{
        alert("do you want to delete");
        console.log(event.target.id);
        //array.pop(1);
        let cost =event.target.value;
        alert(cost);
        total=total-cost;
        let index=event.target.id;
        array.splice(index, 1);
        list.splice(index,1);
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
          <button style={{marginLeft: 20}} onClick={showCart}>show cart</button>

      </div>
      <div className='outer'>
      {items.map((itm) => (
            <div  style={{display :'inline-block'}}>
              <div className='itemDiv' id={itm.id}>
              <h2 value={itm.itemName} className='heading1'  style={{ color:'navy'}}>{itm.itemName}</h2>
              <h3 value={itm.cost} className='heading1' >cost : { itm.cost}</h3>
              <h3 value={itm.quantity} className='heading1' >Qty : { itm.quantity}</h3>


              </div>
              <div style={{ textAlign:'center'}}>
              <button id={itm.itemName}  name={itm.quantity} onClick={addToCart}  value={itm.cost} style={{textAlign:'center'}}>Add Item</button>
              </div>
              </div>
            ))}
            </div>

            <dialog open={opendilog} onClose={openDilogBox}  className="dilogBox2">
             <h2 style={{textAlign:'center'}}>Added item list</h2>   
             <div className='table_div'>
              <table className="table table-bordered table-theader" style={{marginLeft:70}}>
              <thead className= "theader" >
            <tr style={{marginLeft:45,textAlign:'center'}}>
              <th>Name</th>
              <th>quantity</th>
              <th>cost</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {array.map((a) => (
              <tr key={a.id} >
                <td>{a.name}</td>
                <td >{a.qty}</td>
                <td>{a.cost}</td>
                <td>
                  <button
                     id={array.indexOf(a)}
                    type="button"
                    value={a.cost}
                    onClick={deleteItem}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
             
             </table>
             </div>

                       
                <button onClick={closeDilog}  className="dilog_btn" style={{marginTop:0,position:'relative'}}>cancel</button>
                <div className='total_btn'>
                <label id="total" value={total} >total  {total}</label>

                </div>


              </dialog>
        <div className='order_div'>
          <h3 style={{marginLeft:30}}>Item
          </h3>
          <label  style={{marginLeft:30, position:'relative', top:-20}} id="order_lable" value={total}>{total}</label>
          <button id="next" className='next'>
          <Link to={"/OrderItem"}>next</Link>
          </button>
        </div>
        

    </div>
  )
}
