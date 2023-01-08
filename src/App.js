import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform/Textform.js';
//import About from './components/About.js';
import React, { useState } from 'react';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode]=useState({
    color: 'black',
    backgroundColor: '#f0e68c',
    textDecoration: "none"
  })
  const [text, setText]=useState('Enable Dark Mode');
  //Black Mode Function
  const toggleMode=()=>{
    if(mode.color === 'black')
    {
      setMode({
        color: 'white',
        backgroundColor: 'black',
        textDecoration: "none"
      })
      setText('Enable Light Mode');
      document.body.style.backgroundColor="#36454F";
      document.body.style.color="white";
    }
    else{  
      setMode({
        color: 'black',
        backgroundColor: '#f0e68c',
        textDecoration: "none"
      })
      setText('Enable Dark Mode');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  //Red Mode Function
    const toggleRedMode=()=>{
      if(mode.color === 'black')
      {
        setMode({
          color: 'white',
          backgroundColor: '#AA0000',
          textDecoration: "none"
        })
        setText('Enable Light Mode');
        document.body.style.backgroundColor="#fd5c63";
        document.body.style.color="white";
      }
      else{  
        setMode({
          color: 'black',
          backgroundColor: '#f0e68c',
          textDecoration: "none"
        })
        setText('Enable Dark Mode');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
      }
  }
  //Green Mode Function
  const toggleGreenMode=()=>{
    if(mode.color==='black')
    {
      setMode({
        color: 'white',
        backgroundColor: '#006A4E',
        textDecoration: "none"
      })
      setText('Enable Light Mode');
      document.body.style.backgroundColor="#32de84";
      document.body.style.color="white"
    }
    else{
      setMode({
        color: "black",
        backgroundColor: '#f0e68c',
        textDecoration: "none"
      })
      setText('Enable Dark Mode');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
   
  return (
  <>
   <Navbar title="Textutlis" mode={mode} text={text} toggleMode={toggleMode} 
      toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode}/>
    <Textform />
  {/* 
  <BrowserRouter>
      <Navbar title="Textutlis" mode={mode} text={text} toggleMode={toggleMode} 
      toggleRedMode={toggleRedMode} toggleGreenMode={toggleGreenMode}/>
      <Routes>
        <Route exact path="/" element={<Textform />} />
        {/*<Route exact path="about" element={<About />} /> 
      </Routes>
  </BrowserRouter>
  */}
  </>    
  );
}

export default App;
