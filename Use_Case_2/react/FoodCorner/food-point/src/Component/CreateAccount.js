import React from 'react';
import Service from '../ServiceApi/Service';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        

         firstName:"",
         lastName:"",
         email:"",
         phoneNo:"",
         userPassword:"",
         loginType:"admin",
         upassword:"",
         response:"",
        };
        this.changeUserNmaeHandler = this.changeUserNmaeHandler.bind(this);    
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changeuPasswordHandler = this.changeuPasswordHandler.bind(this); 
        this.changeEmailHandler = this.changeEmailHandler.bind(this);    
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this); 

        this.getType=this.getType.bind(this);  
    
}


  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePhoneNoHandler = (event) => {
    this.setState({ phoneNo: event.target.value });
  };
  changeuPasswordHandler = (event) => {
    //alert("password");
    this.setState({ upassword: event.target.value });
  };


changeLnameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

changeUserNmaeHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changePasswordHandler=(event)=>{
    this.setState({userPassword:event.target.value})
  }

  dataValidation(){
    console.log("validation")
    let firstName = this.state.firstName;
    let uPass=this.state.userPassword;
    let email=this.state.email;
    let phoneNo=this.state.phoneNo;
    let upassword=this.state.upassword;

    if(firstName==='' ){
      alert("enter firstname");
      return false;
    }else if(uPass===''){
      alert("enter password");
      return false;
    }else if(email===''){
      alert("enter email");
      return false;
    }else if(phoneNo==='' || phoneNo.length!==10){
      alert("enter phone no with  10 digit");
      return false;
    }else if(uPass!==upassword){
      alert("password not matches");
      return false;
    }
    return true;
  
  }
   
  getInfo = (e) => {
    e.preventDefault();
    let cd={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phoneNo:this.state.phoneNo,
      upassword:this.state.userPassword,
      email:this.state.email,
      password1:this.state.upassword
    }


    //alert(cd.firstName);
    let logintype=this.state.loginType;
    //alert("ghjk"+logintype
    if(this.dataValidation()){
    if(this.state.loginType==='admin'){
        Service.createAdminAccount(cd).then((res)=>{
            alert(res.data);
            if(res.data==='account created'){
            this.setState({response:res.data})
            //alert("res"+this.state.response);
           
            this.setState({email:""});
            this.setState({phoneNo:""});
            this.setState({upassword:""});
            this.setState({userPassword:""});
            }
         });
    }else{
         Service.createAccount(cd).then((res)=>{
            alert(res.data);
            if(res.data==='account created'){
            this.setState({response:res.data})

           
            this.setState({email:""});
            this.setState({phoneNo:""});
            this.setState({upassword:""});
            this.setState({userPassword:""});

            }
        });
    }
   
   
  }
alert("//"); 
 }; 
getType=(event)=>{
    this.setState({loginType:event.target.value})
}
    render() {
        return <div>
          <div className='create' style={{marginTop:-10}}>
          <div className='order_placed_btn'><h2>Create New Account</h2></div>

        <form style={{marginTop:-37}}>
          <div className='lable'>
           <select className='dropdown' onChange={this.getType}>
            <option value="admin">Admin</option>
           <option value="user">User</option>
        </select>
      </div>
        
      <label className='lable'>
        <p>First Name</p>
        <input  className='inner-lable'
            type="text"
            id="uNmae"
            value={this.state.fName}        
            onChange={this.changeUserNmaeHandler}   
          />
      </label>
      <label className='lable'> <p>Last Name</p>
        <input className='inner-lable'
            type="text"
            id="lName"
            value={this.state.lName}        
            onChange={this.changeLnameHandler}   
          />
      </label>
      <label className='lable'> <p>Email</p>
        <input className='inner-lable'
            type="text"
            id="email"
            value={this.state.email}        
            onChange={this.changeEmailHandler}   
          />
      </label>
      <label className='lable'> <p>PhoneNo</p>
        <input className='inner-lable'
            type="text"
            id="phoneNo"
            value={this.state.phoneNo}        
            onChange={this.changePhoneNoHandler}   
          />
      </label>
      <label className='lable'> <p>Password</p>
        <input className='inner-lable'
            type="password"
            id="uPass"
            value={this.state.userPassword}        
            onChange={this.changePasswordHandler}   
          />
      </label>

      <label className='lable'> <p>Re-Enter Password</p>
        <input className='inner-lable'
            type="password"
            id="uPass"
            value={this.state.upassword}        
            onChange={this.changeuPasswordHandler}   
          />
      </label>
      <div>
        <button type="submit" onClick={this.getInfo}>Create
        </button>
        <button style={{marginLeft:20}}> <Link to='/'>Login </Link></button>
      </div>
      
      <div>
        
       
      </div>
    </form>
  </div>
        </div>;
    }
}

export default CreateAccount;