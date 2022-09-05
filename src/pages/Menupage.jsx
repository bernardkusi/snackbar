import React, { useEffect } from 'react'
import Menuitem from '../components/Menuitem'

const Menupage = ({setnavhidden,closenav}) => {
    useEffect(() => {
      setnavhidden(true)
      closenav()   
    }, [])
    
  return (
    <div className='page main'>
         <div className="banner">
            <img src="./menu.jpg" alt="menuimage" />
            <h2>Our Menu</h2>
        </div>
        <div id="menu">
            <div className="menugrid">
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            <Menuitem/>
            </div>
        </div>
    </div>
  )
}

export default Menupage