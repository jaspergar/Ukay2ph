import React from "react";

import ad from "../../images/ad2.jpg";
import "../../css/Cart.css";
import Subtotal from "./Subtotal";
import CartProduct from "./CartProduct";
import menTop from "../../images/menTop2.jpg";
import { useStateValue } from "../../contextApi/StateProvider";
function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        <img src={ad} alt="" className="cart__ad" />
        <div className="cart__product">
          <div className="cart__title">
            <h2>Your Shopping Cart</h2>
            <p>Price</p>
          </div>
          <div className="cart__item">
          {basket.map((item) => (
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
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
