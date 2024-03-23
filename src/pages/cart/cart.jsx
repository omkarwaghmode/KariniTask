import React from 'react'
import {DT} from "../../products";
import {ShopContext } from "../../context/shop-context";
import { useContext } from 'react';
import { CartItem } from './cart-item';
import "./cart.css"
import { useNavigate } from 'react-router-dom';



export const Cart = () => {
    const {cartItems , gettotal } = useContext(ShopContext);
    const totamt = gettotal();
    const navigate = useNavigate();


    
  return (
    <div className='cart'>
      <div>
        <h1>Your Items</h1>
      </div>
      <div className='cartItems'>
        {DT.map((id) => {
            const index = DT.findIndex(x => x.Handle === id.Handle);
            if(cartItems[index] !== 0){
              return <CartItem data ={id}/>;
            }
        })}

      </div>
      <div className='Total'>
        <p>Subtotal: RS {totamt}</p>
        <button onClick={() => navigate("/")}>Continue shopping</button>
      </div>
      </div>
  )
}
  