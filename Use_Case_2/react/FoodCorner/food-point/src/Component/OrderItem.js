import React from 'react'
import QRCode from "qrcode.react";
import Service from '../ServiceApi/Service';


const list=new Array();
export default function OrderItem(props) {
    const [payMethod,setPayMethod]=React.useState();
    const [opendilog, setDilogOpen] = React.useState(false);


    const choosePayMethod=(event)=>{
      event.preventDefault();

      console.log("data");
      console.log(props.dataItem);
        setPayMethod(event.target.value);
        //alert(event.target.value);
        if(event.target.value==="phonePay"){
            setDilogOpen(true);
        }
        else if(event.target.value==='onDelivery'){
          alert("in pay");
          alert("order goint to place");
          Service.takeOrder(props.dataItem).then((res)=>{
            alert(res.data);
          })

        }
    }
const closedilog=(event)=>{
  setDilogOpen(true);
}


const paymentDone=(event)=>{
  event.preventDefault();
    alert("order goint to place");
    Service.takeOrder(props.dataItem).then((res)=>{
      alert(res.data);
    })
    setDilogOpen(false);
}

const closeDilogBox=()=>{
    setDilogOpen(false);
}
  return (
    <div>
        hello
       
      <div className='order_placed'>
        <div className='order_placed_btn'><h2>Choose payment method</h2></div>
        <div>
            <p><button value={"phonePay"} style={{width:100}} onClick={choosePayMethod}>phonePay</button></p>
            <p><button value={"upi"} style={{width:100}} onClick={choosePayMethod}>UPI</button></p>
            <p><button value={"card"} style={{width:100}} onClick={choosePayMethod}>Cards</button></p>
            <p><button value="onDelivery" style={{width:100}} onClick={choosePayMethod} >Pay on Delivery</button></p>
        </div>
      </div>
      <dialog className='dilogBox3' open={opendilog} onClose={closedilog}>
      <div style={{textAlign:'center'}}>
            <QRCode/>    
         </div>
         <button style={{marginTop:50 ,marginLeft:30}} onClick={closeDilogBox}>cancel</button>
         <button style={{marginTop:50 ,marginLeft:20}} onClick={paymentDone}>payment Done</button>

      </dialog>
    </div>
  )
}
