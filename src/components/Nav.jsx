import React, { useState } from 'react'

const Nav = () => {
    const[state,setstate]=useState(false);
    document.addEventListener("scroll",()=>{
        if(window.scrollY>30){
            setstate(true);
        }else{
            setstate(false);
        }
    })
  return (
    <nav className={[state?"visible":""]}>
        <a href="/" className="logo">SnackBar</a>

        <ul className='links'>
        <a href="/"> <i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
        <a href="/"> <i class="fa-sharp fa-solid fa-right-to-bracket"></i></a>
        <a href="/"><i class="fa-solid fa-user"></i></a>
        </ul>

        <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Our Menu</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
        </ul>
    </nav>
  )
}

export default Nav