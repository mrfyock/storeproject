import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Buttons from './components/Buttons/Buttons'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Electronics from './pages/Homepage/Electronics/Electronics'
import Jewlery from './pages/Homepage/Jewlery/Jewlery'
import Mens from './pages/Homepage/Mens/Mens'
import Womens from './pages/Homepage/Womens/Womens'
import Contact from './pages/Homepage/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className='buttons-container'>
        <a href='/' style={{paddingRight: '10px'}}>All</a>          
        <Buttons />
      </div>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/electronics' element={<Electronics />} /> 
        <Route path='/jewlery' element={<Jewlery />} /> 
        <Route path='/mens-clothing' element={<Mens />} />
        <Route path='/womens-clothing' element={<Womens />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    
      <Footer />
    </BrowserRouter>
  )
}

export default App
