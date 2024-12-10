import React from 'react'
import { ImLinkedin } from "react-icons/im";
export default function Footer() {
  return (
    <div className='custom-footer'>
      <img src='/logo.png' alt='logo' />
      <h1>The Ultimate Delivery Solution</h1>
      <a href="https://blip-delivery.com/" style={{color: 'black', fontSize: '30px'}}><ImLinkedin /></a>
      <div className='text-boxes'>
        <div style={{display: 'flex', alignItems: 'center', gap: '50px'}}>
            <h3>Blip</h3>
            <h3>Blip</h3>
            <h3>Blip</h3>
            <h3>Blip</h3>
            <h3>Blip</h3>
            <h3>Blip</h3>
            <h3>Blip</h3>
        </div>
        <h5>
            Hello! This is Blip SignUp Page.
            Hello! This is Blip SignUp Page.
            Hello! This is Blip SignUp Page.
            Welcome to Blip!
        </h5>
      </div>
      
    </div>
  )
}
