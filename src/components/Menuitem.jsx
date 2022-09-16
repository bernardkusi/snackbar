import React from 'react'
import {Link} from 'react-router-dom'

const Menuitem = ({meal,addtocart}) => {
  return (
    <div className="menu">
    <div className="image">
        <img src={require(`../images/${meal.image}.jpg`)} alt={meal.name}/>
    </div>
    <div className="details">
        <Link to={`/menu/${meal.id}`}  className="name">{meal.name}</Link>
        <p className="price">${meal.price}</p>
        <button className="click" onClick={()=>{addtocart(meal)}}>Order now</button>
    </div>
</div>
  )
}

export default Menuitem