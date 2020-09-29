import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
//
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
////

// A public key.
const promise = loadStripe('pk_test_51HUiw8H19v8JUE6zB1xfAwQTzBmnbKXynTECf2RK5yF1KrdiScXOuHl039iIfatcIaVhAX9DvOfe5VDl6z1V12yK00hwkHE54u');

// Everything is inside of this function.
function App() {
  //
  const [{ }, dispatch] = useStateValue();

  // useEffect can be thought of as a dynamic if statement.
  useEffect(() => {
    // create listener
    auth.onAuthStateChanged(authUser => {
      // Test
      console.log('THE USER IS: ', authUser);

      //
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }

      ////
    })

  }, []) // run once when app component loads.




  // After the return. no more javascript. it's jsx
  return (
    <Router>
      <div className="app">


        <Switch>

          {/* The Checkout page route. HAS to be on TOP of Home page DEFAULT!!*/}
          <Route path="/login" >
            <Login />
          </Route>

          {/* The Checkout page route. HAS to be on TOP of Home page DEFAULT!!*/}
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          {/* The Payment page route. HAS to be on TOP of Home page DEFAULT!!*/}
          <Route path="/payment" >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* The Order page route. HAS to be on TOP of Home page DEFAULT!!*/}
          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>

          {/* The Home page route, the default */}
          <Route path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
