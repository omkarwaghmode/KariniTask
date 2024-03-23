import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import {DT} from  "/Users/waghmode/Desktop/Omkar/Task/my-app/src/products.js"

export const CartItem = (props) => {
    const { Title,Handle,Body,Image,Vendor,Price } = props.data;
    const {cartItems , addToCart ,removeFromCart ,update}  = useContext(ShopContext); 
    const index = DT.findIndex(x => x.Handle === Handle);
  return (
    <div className='cartItem'>
        <img src={Image}/>
        <div className='description'>
            <p>
                <b>{Handle}</b>
            </p>
            <p>
                Rs {Price}
            </p>
            <div className='counthandler'>
                <button onClick={() => removeFromCart(Handle)}>-</button>
                <input value={cartItems[index]}  onChange={(e)=> update(Number(e.target.value),Handle) }/>
                <button onClick={() => addToCart(Handle)}>+</button>
            </div>
        </div>
    </div>
  )
}
