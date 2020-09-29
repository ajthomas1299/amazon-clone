import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    //
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    // Payment Hooks, imported above.
    const stripe = useStripe();
    const elements = useElements();

    // Two pieces of state
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    // Two pieces of state
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    //
    const [clientSecret, setClientSecret] = useState(true);


    //
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        // getting a new secret whenever the basket changes!
        // an example of how to run an async function inside of a useEffect.
        // ** A really important snippet of code.

        //
        const getClientSecret = async () => {
            //
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}` //this is where we make the request - stripe expects the total in a currency's subunits
            });

            //
            setClientSecret(response.data.clientSecret);
        }

        //
        getClientSecret();

        ////
    }, [basket]);

    // TEST
    //console.log('THE SECRET IS: ', clientSecret);
    console.log('PERSON: ', user);


    //
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff
        // async / await keywords enable asynchronous, promise-based behavior to be written 
        // in a cleaner style, avoiding the need to explicitly configure promise chains. 
        //

        // stop it from refreshing
        event.preventDefault();

        // stops you from hitting the buy button again.
        setProcessing(true);

        // magic stripe stuff...
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            //
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            // payment succeeded...
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            //

            // empty the basket
            dispatch({
                type: 'EMPTY_BASKET'
            })

            // push them to the orders page, replace or swap the page, so they don't go back to payment page and get caught in a loop.
            history.replace('/orders')
            ////
        })


    }

    const handleChange = event => {
        // we need two pieces of state:
        // one for the button disabled state
        // one to be able to set the button error
        // We are going to Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    ////
    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                {/* Payment section - delivery address */}
                <div id="delivery__address" className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - review items */}
                <div id="review__items" className='payment__section'>
                    <div className='payment__title'>
                        <h3>Please Review Your {basket?.length} Items and Checkout</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div id="payment__method" className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe magic goes here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <br></br>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing...</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
