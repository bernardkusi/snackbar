import React, { useEffect } from 'react'

const Cartpage = ({setnavhidden}) => {
    useEffect(() => {
        setnavhidden(true)
      
      }, [])
  return (
    <div className="page main">
        <h3 className="heading">Meals to order</h3>
    </div>
  )
}

export default Cartpage