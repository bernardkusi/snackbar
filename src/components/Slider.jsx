import React from 'react'
import {Link} from 'react-router-dom'

const Slider = ({navopen}) => {
  return (
    <div className={[navopen?'show slider':'slider']}>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/menu"}>Our Menu</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"#testimonials"}>Testimonials</Link>
        </ul>
    </div>
  )
}

export default Slider