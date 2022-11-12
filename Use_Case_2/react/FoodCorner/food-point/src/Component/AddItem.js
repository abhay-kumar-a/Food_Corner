import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../ServiceApi/Service';
class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         itemName:"",
         quantity:"",
         cost:"",
         imgName:"",
        };
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);    
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this); 
        this.changeFileNameHandler = this.changeFileNameHandler.bind(this);    
        this.getType=this.getType.bind(this);  
    
}

changeItemNameHandler = (event) => {
    this.setState({ itemName: event.target.value });
  };
  changeQuantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  };
  changeCostHandler = (event) => {
    //alert("password");
    this.setState({ cost: event.target.value });
  };


  changeFileNameHandler = (event) => {
    this.setState({ imgName: event.target.value });
  };

  

  addItems= (e) => {
    e.preventDefault();
    let item={
      itemName:this.state.itemName,
      quantity:this.state.quantity,
      cost:this.state.cost,
    }
        Service.addItems(item).then((res)=>{
            alert(res.data);
         });
 }; 


 addItemm= (e) => {
  e.preventDefault();
  
    let name=this.state.itemName;
    let qty=this.state.quantity;
    let cost=this.state.cost;
    let file=this.state.imgName;
  
      Service.addItem(name,qty,cost,file).then((res)=>{
          alert(res.data);
       });
}; 


  

menu=()=>{

}

getType=(event)=>{
    this.setState({loginType:event.target.value})
}
    render() {
        return <div>
          <div className='create'>
        <form method='post' encType='multipart/form-data'>
          <div className='lable'>
           <select className='dropdown' onChange={this.getType}>
            <option value="admin">Admin</option>
           <option value="user">User</option>
        </select>
      </div>
        
      <label className='lable'>
        <p>Item Name</p>
        <input  className='inner-lable'
            type="text"
            id="itemName"
            value={this.state.itemName}        
            onChange={this.changeItemNameHandler}   
          />
      </label>
      <label className='lable'> <p>Quantity</p>
        <input className='inner-lable'
            type="text"
            id="quantity"
            value={this.state.quantity}        
            onChange={this.changeQuantityHandler}   
          />
      </label>
      <label className='lable'> <p>Cost</p>
        <input className='inner-lable'
            type="text"
            id="cost"
            value={this.state.cost}        
            onChange={this.changeCostHandler}   
          />
      </label>
      <label className='lable'> <p>Choose Img</p>
        <input className='inner-lable'
            type="file"
            id="file"
            name="file"
            value={this.state.imgName}        
            onChange={this.changeFileNameHandler}   
          />
      </label>
      <div>
        <button type="submit" onClick={this.addItems}>Submit
        </button>
        <button type="submit" onClick={this.menu} style={{marginLeft :20,color:'blue'}}>
        <Link to='/Item'>Menu</Link>
        </button>
      </div>
      <div>
        
       
      </div>
    </form>
  </div>
        </div>;
    }
}

export default Additem;