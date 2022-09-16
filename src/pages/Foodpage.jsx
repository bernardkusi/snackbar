import React, { useState,useEffect } from 'react'
import Menuitem from '../components/Menuitem'
import { useParams } from 'react-router-dom'
import { meals } from '../meals'

const Foodpage = ({setnavhidden,closenav,addtocart}) => {
    useEffect(() => {
      setnavhidden(true)
      closenav()   
    }, [])

    let { id } = useParams();

    const[items,setitems]=useState("");
    const[item,setitem]=useState("");
    useEffect(
     ()=>{
      // fetch(`http://localhost:3000/meals/${id}`)
      // .then(res=>res.json())
      // .then(data=>setitem(data))
      setitem(meals.find((item)=>item.id==id))
     },
      [id]
    )
    useEffect(
     ()=>{
      // fetch("http://localhost:3000/meals")
      // .then(res=>res.json())
      // .then(data=>setitems(data.filter((item)=>item.id<=4)))
      // console.log(items)
      setitems(meals.filter((item)=>item.id<=4))
     },
      []
    )
    
    
  return (
    <div className='page main'>
    {item && <div className="food">
         <div className="image">
             <img src={require(`../images/${item.image}.jpg`)} alt={item.name} />
         </div>
         <div className="fooddetails">
             <div className="foodname">{item.name}</div>
             <div className="foodprice">${item.price}</div>
             <button className="click" onClick={()=>{addtocart(item)}}>Order meal</button>
         </div>
     </div> }
        <div id="menu">
            <div className="menugrid">
            {items && items.map(item=>{return <Menuitem meal={item} key={item.id} addtocart={addtocart}/>})}

            </div>
        </div>
    </div>
  )
}

export default Foodpage