import React from 'react'
import '../../css/order.css'
import moment from "moment"
import CartProduct from './CartProduct'
import CurrencyFormat from 'react-currency-format';

function Order(props) {
    return (
        <div className="order">
              <h2>Order</h2>
              <p>{moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}</p>
              <p className="order__id">
                    <small>{props.order.id}</small>
              </p>
              {props.order.data.basket?.map(item => (

                <CartProduct
              id={item.id}
              title={item.title}
              delivery={item.delivery}
              desc={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
              seller={item.seller}
              hideButton
            />
              ))}
              <CurrencyFormat
              renderText={(value) => (
                      <p> Order Total: <strong><span>&#8369;</span>{value}</strong></p>
                  )}
                      decimalScale={2}
                      value={props.order.data.amount / 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      // prefix={"P"}
                  />
        </div>
    )
}

export default Order
