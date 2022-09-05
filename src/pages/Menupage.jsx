import React, { useEffect } from 'react'
import Menuitem from '../components/Menuitem'

const Menupage = ({setnavhidden}) => {
    useEffect(() => {
      setnavhidden(true)
    
    }, [])
    
  return (
    <div className='page'>
         <div className="banner">
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