import React, { Fragment, useEffect, useState } from "react";
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
import SecuredRoute from "./components/securityUtils/SecuredRoute";
import Order from "./components/homeComponents/Order";


const promise = loadStripe('pk_test_51HsSRdBO46BhwTv7bJ4q7CvdgX6H7O9yUbJWPhQIbgWwce7eW0IaVGeD6sEyeTLLOKRoDuPe0ByMO1PrYM92eAWD00JRMXQKRA');
function App() {
  const [{user}, dispatch] = useStateValue();
  const [state, setstate] = useState('')
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
console.log(user);


  return (
    <Router>
      <div className="app">
      <Route exact path="/signup">
                <SignUp />
          </Route>
          <Route exact path="/signin">
                <SignIn />
          </Route>
      <Switch>
         
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
         
         
        
       
          <SecuredRoute path='/orders' component={props =>
                <Fragment>
                  <Header/>
                  <Orders/>
                </Fragment>
              } />
       
       <SecuredRoute path='/checkout' component={props =>
                <Fragment>
                  <Header/>
                  <Elements stripe={promise}>
                    <Checkout/>
                </Elements>
                </Fragment>
              } />
              
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
