import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/StateProvider";
import "../../css/Product.css";

function Product(props) {
  // const [state, dispatch] = useStateValue(); //original
  const [{ basket }, dispatch] = useStateValue(); //for checking the basket
  console.log("this is the basket ->>>>>>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        seller: props.seller,
        desc: props.desc,
        rating: props.rating,
        delivery: props.delivery,
      },
    });
  };

  return (
    <div className="product">
      <Link to="/pview" className="product__link">
        <div className="product__info">
          <img src={props.image} alt="" className="product__image" />

          <div className="product__title">
            <h3>{props.title}</h3>
            <p>by {props.seller}</p>
          </div>

          <p className="product__desc">{props.desc}</p>
          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <p className="product__price">
            <small>&#8369;</small>
            <strong>{props.price}</strong>
          </p>
        </div>
      </Link>
      <button onClick={addToBasket}>add to cart</button>
      <p className="product__delivery">{props.delivery}</p>
    </div>
  );
}

export default Product;
