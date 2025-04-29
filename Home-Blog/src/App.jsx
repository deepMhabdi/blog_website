import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='font-family'>
    <Navbar />
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
