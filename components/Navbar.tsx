"use client"
import "../styles/Navbar.scss"
import { useState } from "react"

const Navbar = () => {
const [toggleNav, setToggleNav] = useState<boolean>(false)
const [isLoggedIn, setIsLoggedIn] = useState<string>("not_authenticated")

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
    <h1 className='nav-logo'>DevCALT</h1>
    <div className="ham-icon" onClick={showNav}>X</div>
  </div>
<div className={`nav-link-section ${toggleNav ? "show-hide-nav" : " "}`}>
  <ul className="nav-list">
    <li><a href="#" className='nav-link'>Home</a></li>
    <li><a href="#" className='nav-link'>About</a></li>
    <li><a href="#" className='nav-link'>Why Join us?</a></li>
    <li><a href="#" className='nav-link'>Contact</a></li>
  </ul>

  <div className="action-buttons-section">
    <a href="#" className="signup-btn auth-btn">Sign Up</a>
    <a href="#" className="login-btn auth-btn">Login</a>
  </div>
  </div>
</nav>
  )
}

export default Navbar