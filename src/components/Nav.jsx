import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Nav = ({setnav,navhidden}) => {
    const[state,setstate]=useState(false);
    document.addEventListener("scroll",()=>{
        if(window.scrollY>30){
            setstate(true);
            console.log(navhidden)
        }else{
            setstate(false);
        }
    })
  return (
    <nav className={[state || navhidden?"visible":""]}>
        <Link to={"/"} className="logo">SnackBar</Link>

        <ul className='links'>
        <Link to={"/cart"}> <i className="fa-sharp fa-solid fa-cart-shopping"></i></Link>
        <Link to={"/signin"}> <i className="fa-sharp fa-solid fa-right-to-bracket"></i></Link>
        <button className="last"><i className="fa-solid fa-user">
            <div className="dropdown">
            <Link to={"/"}>My Account</Link>
            <Link to={"/orders"}>Orders</Link>
            </div>
            </i>
            </button>
        </ul>

        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/menu"}>Our Menu</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"#testimonials"}>Testimonials</Link>
        </ul>

        <div className="bars" onClick={setnav}>
            <div className="bar"></div>
        </div>
    </nav>
  )
}

export default Nav