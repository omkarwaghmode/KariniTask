import React, { createContext, useState } from 'react'
import {DT} from "../products"; 


export const ShopContext = createContext(null);

// console.log(DT);
const getDefaultCart =() =>{
    let cart ={};
    for(let i=0; i<DT.length +1; i++){
        cart[i] =0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const[cartItems ,setCartItems]= useState(getDefaultCart);

    const addToCart =(Handle) =>{
        const index = DT.findIndex(x => x.Handle === Handle); 
        setCartItems((prev) => ({...prev , [index]:prev[index]+1}))
    };

    const removeFromCart =(Handle) =>{
        const index = DT.findIndex(x => x.Handle === Handle);
        setCartItems((prev) => ({...prev , [index]:prev[index]-1}))
    };

    const update =(newamt , Handle)=>{
        const index = DT.findIndex(x => x.Handle === Handle);
        setCartItems((prev) => ({...prev ,[index]:newamt}))
    }

    // const sorting =() =>{
    //     let userval = document.getElementById("sort");
    //     let sort_val = userval.options[userval.selectedIndex].value;
    //     console.log(sort_val);
    //     let temp ;
    //     let copy1 = [DT];
    //     if(sort_val === "lowest"){
    //         const sortinglow =(a,b) =>{
    //             return a.Price - b.Price;
    //         };
    //         temp = copy1.sort(sortinglow);
    //     }
    //     return temp;
    // };

    const gettotal =() =>{
        var sum = 0;
        for(const x in cartItems){
            if(cartItems[x]>0){
                sum += cartItems[x] * DT[x].Price;
            }
        }

        return sum;
    };

    const contextValue = {cartItems ,addToCart,removeFromCart ,update , gettotal};

    // console.log(cartItems);
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}
