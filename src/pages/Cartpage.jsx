import React, { useState,useEffect } from 'react'

const Cartpage = ({setnavhidden,closenav,cart,removefromcart}) => {
    useEffect(() => {
        setnavhidden(true)
        closenav()   
      }, [])

      let count=cart.length
      let total = 0
      cart.forEach(element => {
        total+=Number(element.price)
      });
    


  return (
    <div className="page main">
        <h3 className="heading">Meals to order</h3>
        <div className="cart">
        <div className="cartitem">
                <p className='title'>Meal name</p>
                <p className='title'>Meal details</p>
                <p className='title'>Remove meal</p>
            </div>
           {cart.map(meal=>{return ( <div className="cartitem" key={meal.id}>
                <div className="image">
                    <img src={require(`../images/${meal.image}.jpg`)} alt={meal.name} />
                </div>
                <div className="details">
                    <p className="itemname">{meal.name}</p>
                    <p className="itemratin">rating</p>
                    <p className="itemprice">${meal.price}</p>
                </div>
                <div className="click" onClick={()=>{removefromcart(meal)}}>Delete</div>
            </div>
)} )}

            <div className="cartitem">
                <div className="details">
                    <p >Items in cart : {count}</p>
                    <p>Delivery cost : $0.00</p>
                    <p className="itemname">TOTAL : ${total}</p>
                </div>
                <div className="click">Order now</div>
            </div>


        </div>
    </div>
  )
}

export default Cartpage