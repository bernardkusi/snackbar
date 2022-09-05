import React, { useEffect } from 'react'

const Servicepage = ({setnavhidden,closenav}) => {
    useEffect(() => {
        setnavhidden(true)
        closenav()   
      }, [])
  return (
    <div className="page main">
         <div className="banner">
            <h2>Our Services</h2>
        </div>
    </div>
  )
}

export default Servicepage