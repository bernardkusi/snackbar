import React from 'react'
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Services from "../components/Services";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <>
    <Home/>
   <About/>
   <Menu/>
   <Services/>
   <Testimonials/>
   <Contact/>  
    </>
  )
}

export default Homepage