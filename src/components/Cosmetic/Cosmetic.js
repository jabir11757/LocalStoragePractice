import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    // const AddToCartWithParam = () =>  addToCart(id);
    return (
        <div className='cosmetic'>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>ID:<small> {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;