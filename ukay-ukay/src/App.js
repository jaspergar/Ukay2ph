import React, { useEffect } from "react";
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
import SignUp from "./components/authComponents/SignUp";
import { auth } from "./firebase";
import { useStateValue } from "./contextApi/StateProvider";
import Checkout from "./components/homeComponents/Checkout";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51HsSRdBO46BhwTv7bJ4q7CvdgX6H7O9yUbJWPhQIbgWwce7eW0IaVGeD6sEyeTLLOKRoDuPe0ByMO1PrYM92eAWD00JRMXQKRA');
function App() {
  const [{}, dispatch] = useStateValue();

  //listener to always track of who is sign-in
  useEffect(() => {
    //Will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //if the user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/pview">
            <Header />
            <Productview />
          </Route>
          <Route exact path="/items">
            <Header />
            <Item />
          </Route>
          <Route exact path="/subcategory">
            <Header />
            <Subcategory />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/checkout">
          <Header/>
          <Elements stripe={promise}>
            <Checkout/>
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          {/* <Route exact path="/signin" component={SignIn} />
          <Route exact path="/pview" component={Productview} />
          <Route exact path="/items" component={Item} />
          <Route exact path="/subcategory" component={Subcategory} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/" component={Home} />*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
