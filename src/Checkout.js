import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {
    //
    const [{ basket, user }, dispatch] = useStateValue();

    ////
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h3>Thanks for shopping Amazon! <br></br> {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* CheckoutProduct */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/* CheckoutProduct, for testing:
                    <CheckoutProduct
                        id='12345678'
                        title='Thingamabobber: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                        image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                        price={1000}
                        rating={5}
                    />

                    <CheckoutProduct
                        id='12345678'
                        title='Thingamabobber: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                        image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
                        price={1000}
                        rating={5}
                    />*/}
                </div>



            </div>

            <div className="checkout__right">
                <Subtotal />

            </div>


        </div>
    )
}

export default Checkout
