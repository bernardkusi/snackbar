import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
   
    </Routes>
   <Footer/>
   </>
  );
}

export default App;
