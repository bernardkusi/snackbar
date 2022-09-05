import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Slider from "./components/Slider";
import { useState } from "react";
import Menupage from "./pages/Menupage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Signinpage from "./pages/Signinpage";
import Signuppage from "./pages/Signuppage";
import Cartpage from "./pages/Cartpage";

function App() {
  const[navopen,setnavopen]=useState(false);
  const[navhidden,setnavhidden]=useState(true);

  const setnav=()=>{
    if(navopen){
      setnavopen(false)
    }else{
      setnavopen(true)
    }
  }

  const closenav=()=>{
    setnavopen(false)
  }

  const setnavstate=(value)=>{
    setnavhidden(value)
  }

  return (
   <>
    <Nav navopen={navopen} setnav={setnav} navhidden={navhidden}/>
    <Slider navopen={navopen}/>
    <Routes>
      <Route path="/" element={<Homepage setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/menu" element={<Menupage setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/about" element={<Aboutpage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/services" element={<Servicepage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/signin" element={<Signinpage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/signup" element={<Signuppage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/cart" element={<Cartpage  setnavhidden={setnavstate} closenav={closenav}/>}/>
   
    </Routes>
   <Footer/>
   </>
  );
}

export default App;
