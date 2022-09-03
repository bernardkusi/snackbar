import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
   <>
    <Nav/>
   <Home/>
   <About/>
   <Menu/>
   <Services/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
