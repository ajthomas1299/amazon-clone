import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {

    // Setup the useStateValue.
    const [{ basket }, dispatch] = useStateValue();

    // Test
    //console.log("IN PRODUCT, The BASKET: ", basket);

    //
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    ///// jsx after this.
    return (

        <div className="product">

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>🌟</p>))}


                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket} >Add to Basket</button>

        </div>
    )
}

export default Product
