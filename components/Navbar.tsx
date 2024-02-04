"use client"
import Link from "next/link"
import "../styles/Navbar.scss"
import { useState } from "react"

const Navbar = () => {
  // redux items 
/*
const [isLoggedIn, setIsLoggedIn] = useState<string>("not_authenticated")
*/
const [toggleNav, setToggleNav] = useState<boolean>(false)

    const showNav = () =>{
        if(toggleNav){
            setToggleNav(false)
        }
        else{
            setToggleNav(true)
        }
    }


  return (
    <nav className="navbar">
  <div className="logo-section">
    {/* <img src="your_logo.png" alt="Your Logo" /> */}
    <h1 className='nav-logo'>
      <Link href={"/"}>DevCALT</Link>
      
      </h1>
    <div className="ham-icon" onClick={showNav}>
      <span className="ham-icon-container">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>

      </span>
    </div>
    {/* THIS WILL BE PROFILE PICTURE AFTER LOGIN  */}
    {/* <img src="" alt="" /> */}
  </div>
<div className={`nav-link-section ${toggleNav ? "show-hide-nav" : " "}`}>
  <ul className="nav-list">
    <li><a href="#" className="nav-link" onClick={showNav}> Home</a></li>
    <li><a href="#" className='nav-link'>About</a></li>
    <li><Link href={"developers_list"} className="nav-link" onClick={showNav}> View Devs</Link></li>
    <li><a href="#" className='nav-link'>Why DevCALT?</a></li>
  </ul>

  <div className="action-buttons-section">
    <a href="#" className="login-btn auth-btn">Log In</a>
    <a href="#" className="signup-btn auth-btn">Sign Up</a>



  </div>
  </div>
</nav>
  )
}

export default Navbar