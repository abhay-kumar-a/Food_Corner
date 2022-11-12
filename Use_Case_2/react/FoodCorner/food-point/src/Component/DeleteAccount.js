import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../ServiceApi/Service';


export default function DeleteAccount() {

    const [name,setName]=React.useState();
    const [password,setPassword]=React.useState();
    
    const getName=(event)=>{
        setName(event.target.value);
    }

    const getPassword=(event)=>{
        setPassword(event.target.value);
    }

    const deleteAccount=(event)=>{
        event.preventDefault() 
        let data={
            email:name,
            upassword:password,
        }
        Service.deleteUserAccount(data).then((res)=>{
            alert(res.data);
        });
  

    }

  return (
    <div>
      <div className='form'>
        <h2 style={{marginLeft:20}}>Delete Your Account</h2>
        <form>
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
      <div>
        <button type="submit" onClick={deleteAccount}>Delete 
        </button>
        
        <button style={{marginLeft:20}}> <Link to='/'>Login </Link></button>

      </div>
        </form>
        </div>
    </div>
  )
}
