import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import Menupage from "./pages/Menupage";
import Foodpage from "./pages/Foodpage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Signinpage from "./pages/Signinpage";
import Signuppage from "./pages/Signuppage";
import Cartpage from "./pages/Cartpage";
import Orderspage from "./pages/Orderspage";
import Message from "./components/Message";

function App() {
  const[cart,setcart]=useState([])
  const [message,setmessage]=useState(null)
  const[navopen,setnavopen]=useState(false);
  const[navhidden,setnavhidden]=useState(true);

  let savedcart=localStorage.getItem("snackbarcart")
  useEffect(() => {
    if(savedcart){
      setcart(JSON.parse(savedcart))
      console.log("Cart Exists")
    }
    }
  , [])

  useEffect(() => {
    localStorage.setItem("snackbarcart",JSON.stringify(cart))
  }, [cart])
  

  


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
 
  const messageset=(message)=>{
    setmessage(message)
    setTimeout(() => {
      setmessage(null)
    }, 2000);
  }

  const addtocart=(meal)=>{
    let item=cart.includes(meal)
    if(item){
      messageset("Product already in cart")
    }else{
      setcart([...cart,meal])
      messageset(meal.name+" added to cart")
      console.log("cart",cart)
      // localStorage.setItem("snackbarcart",JSON.stringify(cart))
      console.log("local",localStorage.getItem("snackbarcart"))
    }

  }

  const removefromcart=(meal)=>{
    setcart(cart.filter(element=>element!==meal))
    messageset(meal.name+" removed to cart")
    // localStorage.setItem("snackbarcart",JSON.stringify(cart))

  }

  return (
   <>
    <Nav navopen={navopen} setnav={setnav} navhidden={navhidden} cart={cart}/>
    <Slider navopen={navopen}/>
    {message && <Message message={message}/>}
    <Routes>
      <Route path="/" element={<Homepage setnavhidden={setnavstate} closenav={closenav} addtocart={addtocart}/>}/>
      <Route path="/menu" element={<Menupage setnavhidden={setnavstate} closenav={closenav}  addtocart={addtocart}/>}/>
      <Route path="/menu/:id" element={<Foodpage setnavhidden={setnavstate} closenav={closenav}  addtocart={addtocart}/>}/>
      <Route path="/about" element={<Aboutpage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/services" element={<Servicepage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/signin" element={<Signinpage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/signup" element={<Signuppage  setnavhidden={setnavstate} closenav={closenav}/>}/>
      <Route path="/cart" element={<Cartpage  setnavhidden={setnavstate} closenav={closenav} cart={cart} removefromcart={removefromcart}/>}/>
      <Route path="/orders" element={<Orderspage  setnavhidden={setnavstate} closenav={closenav}/>}/>
   
    </Routes>
   <Footer/>
   </>
  );
}

export default App;
