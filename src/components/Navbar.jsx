/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../assets/img/logo-white.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const onToggle = () => {
    let navbarid = document.getElementById("navbar");
    navbarid.classList.toggle("navbar-mobile");
  };

  const ToggleButton = () => {
    let navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      let navbarToggle = document.getElementById("toggle-button");
      navbarToggle.classList.add("bi-list");
    }
  };

  const ToggleDropDown= (e)=>{
    e.preventDefault()
    let drop_down_active = e.currentTarget.nextElementSibling
    drop_down_active.classList.toggle('dropdown-active')
  }
  
  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto primary">
            <Link to="./">
              <img src={logo} class="img-fluid" alt="logo"></img>
              <p class="logo_underx text-white">x=independently organized <span  style={{color: "red"}}> TED </span>event</p>
            </Link>
          </h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li onClick={ToggleButton}><Link class="nav-link scrollto" to="./">Home</Link></li>
              <li  class="dropdown"><a href="#" onClick={ToggleDropDown}><span>About</span> <i class="bi bi-chevron-down"></i></a>
                <ul >
                  <li  onClick={ToggleButton}><Link to="./about"><span>About Us</span></Link></li>
                  <li  onClick={ToggleButton}><Link to="./team"><span>TED<sup>x</sup> Team</span></Link></li>
                </ul>  
              </li>
              <li class="dropdown"><a onClick={ToggleDropDown} href="#"><span>Spekaers</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li  onClick={ToggleButton}><Link to="./speakers">Our Speakers</Link></li>
                  <li  onClick={ToggleButton}> <Link to="./">Apply To Speak</Link></li>
                </ul>  
            </li>
              <li onClick={ToggleButton}><Link class="nav-link scrollto" to="./events">Events</Link></li>
              <li onClick={ToggleButton}><Link class="nav-link scrollto " to="./gallery">Gallery</Link></li>
              <li onClick={ToggleButton}><Link class="nav-link scrollto" to="./contact">Contact us</Link></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle" onClick={onToggle} id="toggle-button"></i>
          </nav>
          <Link to="./" class="get-started-btn scrollto">Get Started</Link>
        </div>
      </header>
     
    </>
  );
};

export default Navbar;
