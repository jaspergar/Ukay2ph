import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Orders from "./components/homeComponents/Orders";
import Cart from "./components/homeComponents/Cart";
import Subcategory from "./components/homeComponents/Subcategory";
import Item from "./components/homeComponents/Item";
import Productview from "./components/homeComponents/Productview";
import SignIn from "./components/authComponents/SignIn";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/pview" component={Productview} />
          <Route exact path="/items" component={Item} />
          <Route exact path="/subcategory" component={Subcategory} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
