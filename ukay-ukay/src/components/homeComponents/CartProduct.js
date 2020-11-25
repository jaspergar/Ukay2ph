import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/StateProvider";
import "../../css/CartProduct.css";

function CartProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeOneFromBasket = () => {
    dispatch({
      type: "REMOVE_ONE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="cartproduct">
      <Link to="/pview">
        <img src={props.image} alt="" className="cartproduct__image" />
      </Link>
      <div className="cartproduct__info">
        <Link className="cartproduct__link" to="/pview">
          <h3 className="cartproduct__title">title</h3>
          <p className="cartproduct__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            tempore voluptatum tempora quos cum laudantium velit facere. Beatae
            dolorem quas quis impedit blanditiis nam? Quidem, ratione.
            Perspiciatis, soluta? Quo, quaerat?
          </p>
        </Link>
        <p className="cartproduct__seller">by seller</p>
        <div className="cartproduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeOneFromBasket}>Remove from cart</button>
      </div>
      <p className="cartproduct__price">
        <small>P</small>
        <strong>{props.price}</strong>
      </p>
    </div>
  );
}

export default CartProduct;
