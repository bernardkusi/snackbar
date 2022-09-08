import React from 'react'
import {Link} from 'react-router-dom'

const Menuitem = () => {
  return (
    <div className="menu">
    <div className="image">
        <img src="bacd.png" alt="image1" />
    </div>
    <div className="details">
        <Link to="/menu/1"  className="name">Burger</Link>
        <p className="price">$32.00</p>
        <button className="click">Order now</button>
    </div>
</div>
  )
}

export default Menuitem