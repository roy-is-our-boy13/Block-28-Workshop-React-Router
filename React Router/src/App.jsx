import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Green from './components/Green.jsx';  
import Purple from './components/Purple.jsx'; 
import Home from './components/Home.jsx';

function App() 
{

  /*
  return (<div id="container">
      <h1>Hello React Router!</h1>)
        <Navbar />
        <MainContainer />
      </div>);
*/
  
  return(
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>
      </div>
    </div>);
}

export default App
