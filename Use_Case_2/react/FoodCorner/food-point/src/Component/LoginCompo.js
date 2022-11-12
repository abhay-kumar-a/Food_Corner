import React from 'react'
import Service from '../ServiceApi/Service';
import { Link } from 'react-router-dom';


var response="";

export default function LoginCompo(props) {
    const [name,setName]=React.useState();
    const [password,setPassword]=React.useState();
    const [logintype,setLogintype]=React.useState("admin");
    const [pageRedirect,setPageRedirect]=React.useState("/");
    const [show, setShow] =React.useState(false);
    const [opendilog, setDilogOpen] = React.useState(false);


    


    const getName=(event)=>{
        setName(event.target.value);
    }
    const getPassword=(event)=>{
        setPassword(event.target.value);
    }
    const getLoginType=(event)=>{
        setLogintype(event.target.value);
        
        let type=event.target.value;
       if(type==='admin')
       setShow(false);
       else 
       setShow(true);


      
    }


    const openDilogBox=()=>{
        setDilogOpen(true);
    }

    const checkItem=(event)=>{
       if(  response===''){
        alert(" Please login first")
       }

    }
   function dataValidation(){
        console.log("validation")
        let uNmae = name;
        let uPass=password;
        if(uNmae===' '){
          alert("enter username/email");
          return false;
        }else if(uPass===''){
          alert("enter password");
          return false;
        }
        return true;
      
      }
      
const deletedilog=(event)=>{
    alert("hh");
    setDilogOpen(true);
}


     const  getInfo = (e) => {
        e.preventDefault();
        let uNmae = name;
        let uPass=password;
        console.log("id"+uNmae);
        //alert(logintype);
        let loginType=logintype;
        if(dataValidation()){
          if(loginType==='admin'){
           // alert("in admin");
            Service.loginAdmin(uNmae,uPass).then((res)=>{
              alert(res.data);
              if(res.data==='login successfully'){
                setPageRedirect("/ShowItem");
                response=res.data;
                props.onSubmit(name);
              }  
            });
          }
          else{
          //  alert("in user");
            Service.loginUser(uNmae,uPass).then((res)=>{
             // alert(res.data);
              let d=res.data;
              const myArray = d.split("/");
              alert(myArray[0]);
              if(myArray[0]==='login successfully'){
                setPageRedirect("/UserItem");
                response=[0];
                let userData={
                  name:name,
                  email:myArray[1],
                  phoneNo:myArray[2],
                }
               // alert(userData)
                props.onSubmit(userData);
              }
            });
          }
        }   
     }; 
  return (
    <div> 
        <div className='form' style={{marginLeft:470 ,marginTop:-12.5}}>
        <div className='order_placed_btn'><h2>Login Your Account</h2></div>
        <form style={{marginTop:-40}}>
          <div className=''>
           <select className='dropdown' value={logintype} onChange={getLoginType}>
            <option value="admin">Admin</option>
           <option value="user">User</option>
        </select>
      </div>
        
      <label>
        <p>Username/Email</p>
        <input className='inner-lable'
            type="text"
            id="uNmae"
            value={name}
            onChange={getName}
            
          />
      </label>
      <label className='lable'> <p>Password</p>
        <input className='inner-lable'
            type="password"
            id="uPass"
            value={password}
            onChange={getPassword}
               
          />
      </label>
      <div>
        <button type="submit" onClick={getInfo}>Login
        </button>
        {show && 
           <button style={{marginLeft:20}}> <Link to="/DeleteAccount" style={{ position:'relative'}} > delete Account</Link></button>
            }
        
        <button style={{marginLeft:20}} onClick={checkItem}><Link to={pageRedirect} >check Item</Link>
        </button>
      </div>
      <Link to="/CreateAccount" style={{top:50 , position:'relative'}} > Create new Account</Link>
      <p>
      <Link to="/Forgotpass" style={{top:50 , position:'relative'}} > Forgot password</Link>
      </p>

      <div>  
            
      </div>
    </form>
  </div>
 </div>
  )
}
