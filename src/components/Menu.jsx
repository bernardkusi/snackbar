import React from 'react'
import Menuitem from './Menuitem'

const Menu = () => {
  return (
    <div id='menu'>
        <div className="page">
            <h3 className="heading">Our Menu</h3>
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

export default Menu