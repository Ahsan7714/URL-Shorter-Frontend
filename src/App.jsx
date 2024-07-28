import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import Home from './components/home/Home';
import About from './components/About';

const App = () => {
  return (
    <div>
      <About/>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
    </div>
  )
}

export default App