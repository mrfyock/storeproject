import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai"

function Header() {
  return (
    <div>
      <div className='header-container'>
        <h1 className='store-title'>Fake Store</h1>
        <div>
            <AiOutlineShoppingCart className='cart-icon'/>
            <p className='counter'>1</p>
        </div>        
      </div>
    </div>
  )
}

export default Header
