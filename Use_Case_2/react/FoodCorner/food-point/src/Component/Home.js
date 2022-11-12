
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const navigate=useNavigate();
function handelClic(){
   // navigate("/Item");
}

    return <div>
        <button onClick={(e)=>{handelClic()}}>click me</button>
        <Link to="/Item" onClick={handelClic()} >hey</Link>
    </div>;
}


export default Home;