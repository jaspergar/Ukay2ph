
import { Link } from 'react-router-dom';
import React from 'react'
import { useStateValue } from '../../contextApi/StateProvider'
import CartProduct from './CartProduct';
import "../../css/Checkout.css"

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
           <div className="checkout__items">
           <h1>Checkout ( <Link to={'/cart'}><span> {basket?.length} items</span> </Link> ) </h1>
           </div>

           <div className="checkout__container">
              <div className="checkout__title">
              <h1>Delivery Address</h1>
              </div>
               <div className="checkout__addressinfo">
                   <p>name</p>
                   <p>{user?.email}, number</p>
                   <p>full address</p>
               </div>
               </div>
               <div className="checkout__container">
               <div className="checkout__title">
              <h1>Review Delivery Items</h1>
              </div>
              <div className="checkout__iteminfo">
              {basket.map(item =>(
                <CartProduct
              id={item.id}
              title={item.title}
              delivery={item.delivery}
              desc={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
              seller={item.seller}
            />
              ))}
              </div>
               </div>
             <div className="checkout__container">
             <div className="checkout__title">
              <h1>Payment Method</h1>
              </div>
                 <div className="checkout__paymentinfo">
                     <p>Card details</p>
                     <div className="checkout__carddetails">
                         <input type="text" placeholder="Card number"/>
                     </div>
                     <div className="checkout__ordertotal">
                         <p>Order Total: 0</p>
                         <button>Buy now</button>
                     </div>
                 </div>
             </div>
         
        </div>
    )
}

export default Checkout
