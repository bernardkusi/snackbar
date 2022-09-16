import React, { useEffect, useState } from 'react'
import Menuitem from './Menuitem'
import {meals} from '../meals'

const Menu = ({addtocart}) => {
  const[items,setitems]=useState("");
  useEffect(
   ()=>{
    // fetch("http://localhost:3000/meals")
    // .then(res=>res.json())
    // .then(data=>setitems(data))
    setitems(meals)
    
   },
    []
  )
  return (
    <div id='menu'>
        <div className="page">
            <h3 className="heading">Our Menu</h3>
            <div className="menugrid">
              {items && items.map(item=>{return <Menuitem meal={item} key={item.id} addtocart={addtocart}/>})}
            {/* <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/> */}
            </div>
        </div>
    </div>
  )
}

export default Menu