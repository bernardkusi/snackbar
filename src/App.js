import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const[navopen,setnavopen]=useState(false);

  const setnav=()=>{
    if(navopen){
      setnavopen(false)
    }else{
      setnavopen(true)
    }
  }

  return (
   <>
    <Nav navopen={navopen} setnav={setnav}/>
    <Slider navopen={navopen}/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
   
    </Routes>
   <Footer/>
   </>
  );
}

export default App;
