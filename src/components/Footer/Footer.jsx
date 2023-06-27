import React from 'react'
import './Footer.css'
import { AiFillHeart } from "react-icons/ai"

function Footer() {
   
  return (
    <div className='footer-container'>
      <div className='blurb'>
        <p>Made with <AiFillHeart /> by mimo</p>
      </div>
      <div>
        <a href='/contact' className='contact'>Contact Us</a>
      </div>
    </div>
  )
}

export default Footer
