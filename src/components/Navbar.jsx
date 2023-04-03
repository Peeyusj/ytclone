import React from 'react'
import logo1 from '../imagess/ytl.png'
import '../styles/navbar.css'
import prof from '../imagess/profileicon.png'
import not from '../imagess/WhatsApp_img.png'
import {Link,NavLink,to,useLocation} from "react-router-dom"

export default function Navbar() {
 let  loc=useLocation()
  let locname=loc.pathname
  console.log(locname)
  return (
    <div className="navbar" >
 <div className='navbar1'>  
    <Link to="/" style={{textDecoration:"none",color:"black"}}>
    <div className="logo">
<img style={{width:"80px"}} src={logo1} alt="" /><h3>Youtube <sup style={{fontWeight:"lighter",fontSize:"11px"}}>IN</sup></h3>
      </div></Link> 
      <div className="searchbar" style={{marginLeft:"188px"}}>< input type="text" placeholder='Search'/></div>
      <div className="addvid">
        <NavLink to="/addvid" className='vidlink'  >+Add videos</NavLink>
        <NavLink to="/about" className='vidlink'  >About us</NavLink>

      </div>
      
      <div className="profile">
      <img style={{width:"25px",marginRight:"10px"}} src={not} alt="" />
    <img style={{width:"29px",borderRadius:"60%",marginRight:"12px"}} src="https://avatars.githubusercontent.com/u/110000004?v=4" alt="" />
    
      </div>
    </div>
    </div>
   
  )
}
