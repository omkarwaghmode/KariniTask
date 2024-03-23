 import React,{useContext, useState} from 'react'
 import {DT} from "../../products"; 
 import {Product} from "./product";
 import { ShopContext } from '../../context/shop-context';
 import './shop.css'
 
//  console.log(DT);
 export const Shop = () => {
  const [Searchterm , setSearchterm ]=useState("");

  // const {sorting} = useContext(ShopContext);


   return (
     <div className='shop'>
      <div className='searchbar'>

        <input  size="35"  id="search_input" type="text" placeholder='Search items....'  
        onChange={(e)=> {
          setSearchterm(e.target.value);
        }}
        />
      </div>
      {/* <div className='options'>
      <form action='#'>
          <label htmlFor='sort'></label>
          <select name="sort" id="sort" className='sort-selection--style' onClick={sorting} >
          <option value="popularity" >Popularity</option>
            <option value= "#" disabled></option>
            <option value="lowest" >Price(Lowest)</option>
            <option value= "#" disabled></option>
            <option value="highest" >Price(Highest)</option>
            <option value= "#" disabled></option>
          </select>
        </form> */}
      {/* </div> */}
      <div className='products'>
        {
          DT.filter((val) => {
            if(Searchterm === ""){
              return val;
            }
            else if(val.Handle.toLowerCase().includes(Searchterm.toLowerCase())){
              return val;
            }

          })
          .map((val) =>{
            return <Product data={val}/>
          })
        }
        {/* {
        DT.map((id) => (
          <Product data={id}/>
        ))
        } */}
      </div>
     </div>
   )
 }
 