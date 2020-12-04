
import { Link, useHistory,withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../contextApi/StateProvider'
import CartProduct from './CartProduct';
import "../../css/Checkout.css"
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../contextApi/reducer';
import axios from '../../axios'
import {db} from "../../firebase"


function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
 
    

    const history = useHistory();

   
    //stripe 
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setprocessing] = useState("")
    const[error, setError] =useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() => {
         //generate the special stripe secret which allows me to charge a customer
      
         const getClientSecret = async () => {
               const response = await axios({
                   method:"post",
                   //Stripe expects the total in a currencies subunits
                   url:`/payments/create?total=${getBasketTotal(basket) * 100}`
               })
               setclientSecret(response.data.clientSecret)
         }
    
            getClientSecret();

    }, [basket])


    console.log('The secret is >>>',clientSecret)
    console.log("user",user)

    const handleSubmit = async (e) =>{
           e.preventDefault();
           setprocessing(true);

           const payload = await stripe.confirmCardPayment(clientSecret,{
               payment_method: {
                   card: elements.getElement(CardElement)
               }
           }).then(({paymentIntent}) =>{
               //paymentIntent = payment confirmation
               
              //adding orders to firebase firestore database
                db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })

               setSucceeded(true);
               setError(null)
               setprocessing(false)

               dispatch({
                   type:'EMPTY_BASKET'
               })

               history.replace('/orders')
           })
    }

    const handleChange = e =>{
        //listen for changes in the CardElement
        //and Display any errors as the  customer types their card

        setDisabled(e.empty);
        setError(e.error? e.error.message:"");

    }
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
                    
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="checkout__ordertotal">
                                    <CurrencyFormat
                                    renderText={(value) => (
                                            <p> Order Total: <strong><span>&#8369;</span>{value}</strong></p>
                                        )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            // prefix={"P"}
                                        />
                            
                                        <button disabled={processing || disabled || succeeded}>
                                        <span>{processing? <p>processing</p> : "Buy now"}</span>
                                        </button>
                            </div>

                              {error && <div>{error}</div>}
                        </form>
                   
                     
                 </div>
             </div>
         
        </div>
    )
}

export default withRouter(Checkout)
