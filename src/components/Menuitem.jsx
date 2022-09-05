import React from 'react'

const Menuitem = () => {
  return (
    <div className="menu">
    <div className="image">
        <img src="./bacd.png" alt="image1" />
    </div>
    <div className="details">
        <p className="name">Burger</p>
        <p className="price">$32.00</p>
        <button className="click">Order now</button>
    </div>
</div>
  )
}

export default Menuitem