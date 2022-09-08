import React, { useEffect } from 'react'
import Menuitem from '../components/Menuitem'

const Foodpage = ({setnavhidden,closenav}) => {
    useEffect(() => {
      setnavhidden(true)
      closenav()   
    }, [])
    
  return (
    <div className='page main'>
        <div className="food">
            <div className="image">
                <img src="./aboutimage.png" alt="foodimage" />
            </div>
            <div className="fooddetails">
                <div className="foodname">Burger</div>
                <div className="foodprice">$23.00</div>
                <button className="click">Order meal</button>
            </div>
        </div>
        <div id="menu">
            <div className="menugrid">
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            </div>
        </div>
    </div>
  )
}

export default Foodpage