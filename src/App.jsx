import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Works from "./components/Works";

import Extracuricular from "./components/Extracuricular";

const App=() => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-orange-l">
        <div className="bg-galaxyblue bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        </div>
        <About/>
        <Experience/>
       
        <Works/>
        {/* <Extracuricular/> */}
        <div className="relative z-0">
          <Contact/>
         
        </div>   
        
      </div>
    </BrowserRouter>
  )
}
export default App
