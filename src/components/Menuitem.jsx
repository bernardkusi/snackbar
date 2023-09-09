import React from 'react'
import { Link } from 'react-router-dom'

const Menuitem = ({ meal, addtocart }) => {
  return (
    <div className="menu">
      <Link to={`/menu/${meal.id}`}>
        <div className="image">
          <img src={require(`../images/${meal.image}.jpg`)} alt={meal.name} />
        </div>
      </Link>
      <div className="details">
        <p className="name">{meal.name}</p>
        <p className="price">${meal.price}</p>

        <button className="click" onClick={() => { addtocart(meal) }}>Order now</button>
      </div>
    </div>
  )
}

export default Menuitem