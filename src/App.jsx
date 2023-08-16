import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Form from "./components/Form";

function App() {

  return (
   
      <>
      <Navbar />
     
     <Home />
     <About />
     <Skills />
     <div name="contact" className="w-full h-screen pt-[150px]">
      <Form/>
      <Contact/>
     </div>
      </>
  );
}

export default App;
