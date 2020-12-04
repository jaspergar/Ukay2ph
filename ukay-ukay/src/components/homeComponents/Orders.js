import React, { useState }  from 'react'
import { useEffect } from "react";
import { useStateValue } from "../../contextApi/StateProvider";
import {db} from '../../firebase'
import '../../css/Orders.css'
import Order from './Order';
import {withRouter} from 'react-router-dom';


function Orders() {

  const [orders, setOrders] = useState([]);
  const [{basket,user},dispatch] = useStateValue();

  useEffect(() =>{
   let unmounted = false;

  
    if(user){
      if(!unmounted){
      db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc')
      .onSnapshot(snapShot => (
        setOrders(snapShot.docs.map(doc => ({
          id: doc.id,
          data : doc.data()
        })))
      ))
      }
    }else{
      setOrders([])
    }
   
   

    return () => {
      unmounted =true;
    }
   
  },[user])

  return (
    <div className="orders">
         <h1>Your Orders</h1>

         <div className="orders__order"> 
           {orders?.map(order => (
             <Order order={order}/>
           ))}

          
         </div>  
    </div>
  )
}

export default withRouter(Orders) 





