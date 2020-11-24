import React, { Component } from "react";
import "../../css/Item.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Product from "./Product";
import menTop from "../../images/menTop2.jpg";
export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item__sortnav">
          <p>sort function here</p>
        </div>
        <div className="item__container">
          <div className="item__sidecategory">
            <div className="item__back">
              <ArrowBackIosIcon className="item__arrowback" />
              <p>{/*dynamic*/}Back</p>
            </div>

            <h3 className="item__categorytitle">{/*dynamic*/}Top</h3>
            {/*item will be dynamic*/}
            <div className="item__categoryrow">
              <p className="item__category">Shirts</p>
              <p className="item__category">Sweaters</p>
              <p className="item__category">Jackets</p>
              <p className="item__category">Fashion Hoodie</p>
            </div>
            <h3 className="item__categorytitle">Brand</h3>
            <div className="item__categoryrow">
              <div className="item__brand">
                {/*dynamic*/}
                <input type="checkbox" />
                <p className="item__category">brand name</p>
              </div>
            </div>

            <h3 className="item__categorytitle">Price</h3>
            <div className="item__categoryrow">
              {/*dynamic*/} <p className="item__category">prices</p>
            </div>
          </div>
          <div className="item__content">
            <div className="item__info">
              <h1 className="item__title">title</h1>
              <p className="item__desc">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="item__row">
              <Product
                id={9}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={132.55}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={8}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={7}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={6}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={5}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={4}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={3}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={2}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
              <Product
                id={1}
                image={menTop}
                title="THE COMFY Original"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio."
                rating={1}
                price={123334}
                delivery="free shipping"
                seller="mr.gar"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
