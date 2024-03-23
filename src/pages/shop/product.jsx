import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useInRouterContext } from 'react-router-dom';
import {DT} from  "/Users/waghmode/Desktop/Omkar/Task/my-app/src/products.js"


export const Product = (props) => {
    const { Title,Handle,Body,Image,Vendor,Price } = props.data;
    const {addToCart , cartItems} = useContext(ShopContext);

    const index = DT.findIndex(x => x.Handle === Handle);
    const cartamt = cartItems[index]
  return (
    <div className='product'>
                <div className='hnd'>
                <h5>{Handle}</h5>
                </div>
                <img src={Image}></img><div className="description">
                  <p>{Body}</p>
                  <p>{Vendor}</p>
                  <p>Rs {Price} </p>
              </div>
        <button className='addToCartBttn'  onClick={()=>addToCart(Handle)}>Add to Cart   {cartamt >0  && <> ( {cartamt})</>}</button>
    </div>
  )
}
