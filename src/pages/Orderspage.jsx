import React, { useEffect } from 'react'

const Orderspage = ({setnavhidden,closenav}) => {
    useEffect(() => {
        setnavhidden(true)
        closenav()   
      }, [])
  return (
    <div className="page main">
        <h3 className="heading">Order History</h3>
        <div className="cart">
            <div className="cartitem">
                <p className='title'>Meal name</p>
                <p className='title'>Meal details</p>
                <p className='title'>Date delivered</p>
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
                 <div>
                    <p className="date">24/03/22</p>
                    <p className="status status">Delivered</p>
                 </div>
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
                <div>
                    <p className="date">08/06/22</p>
                    <p className="status status">Pending</p>
                 </div>
            </div>


        </div>
    </div>
  )
}

export default Orderspage