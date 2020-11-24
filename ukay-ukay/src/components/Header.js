import React, { isValidElement } from "react";
import "../css/Header.css";
import logo from "../images/logo.png";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../contextApi/StateProvider";
import SignIn from "./authComponents/SignIn";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logoContainer">
          <Link to="/">
            <img src={logo} className="header__logo" />
            <h1>UKAY2PH</h1>
          </Link>
        </div>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/signin" className="header__link">
            <div className="header__option">
              <span className="header__optionOne">Hello Guest</span>
              <span className="header__optionTwo">Sign In</span>
            </div>
          </Link>
          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionOne">view</span>
              <span className="header__optionTwo"> Orders</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="header__basket">
              <ShoppingBasketIcon />
              <span className="header__optionTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
