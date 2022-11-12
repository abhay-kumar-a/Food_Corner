import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../ServiceApi/Service';


export default function Forgotpass() {
    const [name,setName]=React.useState();
    const [password,setPassword]=React.useState();
    const [repassword,setRe_Password]=React.useState();
    const [logintype,setLogintype]=React.useState("admin");



    const getName=(event)=>{
        setName(event.target.value);
    }

    const getLoginType=(event)=>{
        setLogintype(event.target.value);
        let type=event.target.value;
       
      
    }
    const getPassword=(event)=>{
        setPassword(event.target.value);
    }

    const getRe_Password=(event)=>{
        setRe_Password(event.target.value);
    }

    function dataValidation(){
     // alert("in validation");
      let rPass=repassword;
      let pass=password;
      if(!(rPass===pass)){
        alert("password does not matches");
        setName("");
        setPassword("");
        setRe_Password("");
        return false;
      }
      return true;
    }
    const saveData=(event)=>{ 
      event.preventDefault();
      if(dataValidation()) {
        let data={
            email:name,
            upassword:password,
        }
        let loginType=logintype;
        if(loginType==='admin'){
           // alert("in admin");
        Service.recoverAdminPass(data).then((res)=>{
            alert(res.data);
            setName("");
            setPassword("");
            setRe_Password("");
        });
    }
    else {
       // alert("in user");
        Service.recoverPass(data).then((res)=>{
            alert(res.data);
            setName("");
            setPassword("");
            setRe_Password("");
        });
     }
     }
    
    }
  return (
    <div>
      <div  style={{top:-40,marginLeft:450}} className='form'>
      <div className='order_placed_btn'><h2>Reset Your Password</h2></div>
        <form style={{marginTop:-50}}>
        <div className='dropdown'>
           <select className='dropdown' value={logintype} onChange={getLoginType} >
            <option value="admin">Admin</option>
           <option value="user">User</option>
        </select>
      </div>
        <label>
        <p>Email</p>
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
      <label className='lable'> <p>Re-Password</p>
        <input className='inner-lable'
            type="password"
            id="rPass"
            value={repassword}
           onChange={getRe_Password}
          />
      </label>
      <div>
        <button type="submit" onClick={saveData}>Save 
        </button>
        
        <button style={{marginLeft:20}}><Link to={"/"} >Login</Link>
        </button>
      </div>
        </form>
        </div>
    </div>
  )
}
