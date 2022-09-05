import React, { useEffect } from 'react'

const Servicepage = ({setnavhidden}) => {
    useEffect(() => {
        setnavhidden(true)
      
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