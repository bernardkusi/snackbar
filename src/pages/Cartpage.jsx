import React, { useEffect } from 'react'

const Cartpage = ({setnavhidden,closenav}) => {
    useEffect(() => {
        setnavhidden(true)
        closenav()   
      }, [])
  return (
    <div className="page main">
        <h3 className="heading">Meals to order</h3>
        <div className="cart">
        <div className="cartitem">
                <p className='title'>Meal name</p>
                <p className='title'>Meal details</p>
                <p className='title'>Remove meal</p>
            </div>
            <div className="cartitem">
                <div className="image">
                    <img src="./bacd.png" alt="cartitem" />
                </div>
                <div className="details">
                    <p className="itemname">Burger</p>
                    <p className="itemratin">rating</p>
                    <p className="itemprice">$45.00</p>
                </div>
                <div className="click">Delete</div>
            </div>

            
            <div className="cartitem">
                <div className="image">
                    <img src="./bacd.png" alt="cartitem" />
                </div>
                <div className="details">
                    <p className="itemname">Burger</p>
                    <p className="itemratin">rating</p>
                    <p className="itemprice">$45.00</p>
                </div>
                <div className="click">Delete</div>
            </div>

            <div className="cartitem">
                <div className="details">
                    <p >Items in cart : 5</p>
                    <p>Delivery cost : $0.00</p>
                    <p className="itemname">TOTAL : $499.00</p>
                </div>
                <div className="click">Order now</div>
            </div>


        </div>
    </div>
  )
}

export default Cartpage