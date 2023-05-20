import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Buttons from './components/Buttons/Buttons'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'



function App() {


  return (
    <div>
      <Header />
      <div className='buttons-container'>
        <button style={{paddingRight: '10px'}}>All</button>          
        <Buttons />
      </div>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
