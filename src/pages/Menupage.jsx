import React, { useState,useEffect } from 'react'
import Menuitem from '../components/Menuitem'
import { meals } from '../meals'

const Menupage = ({setnavhidden,closenav,addtocart}) => {
    useEffect(() => {
      setnavhidden(true)
      closenav()   
    }, [])

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
    <div className='page main'>
         <div className="banner">
            <img src="./menu.jpg" alt="menuimage" />
            <h2>Our Menu</h2>
        </div>
        <div id="menu">
            <div className="menugrid">
            {items && items.map(item=>{return <Menuitem meal={item} key={item.id} addtocart={addtocart}/>})}
            </div>
        </div>
    </div>
  )
}

export default Menupage