import React from 'react'
import logo1 from '../imagess/ytl.png'
import '../styles/navbar.css'
import prof from '../imagess/profileicon.png'
import not from '../imagess/WhatsApp_img.png'


export default function Navbar() {
  return (
    <div className="navbar" >
 <div className='navbar1'>  
      <div className="logo">
        <img style={{width:"80px"}} src={logo1} alt="" /><h3>Youtube <sup style={{fontWeight:"lighter",fontSize:"11px"}}>IN</sup></h3>
      </div>
      <div className="searchbar">< input type="text" placeholder='Search'/></div>
      <div className="profile">
      <img style={{width:"25px",marginRight:"10px"}} src={not} alt="" />
    <img style={{width:"25px"}} src={prof} alt="" />
    
      </div>
    </div>
    </div>
   
  )
}
