/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../assets/img/logo-white.png';
import {Link} from 'react-router-dom'
import { HashLink  } from 'react-router-hash-link';

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
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto primary">
            <Link to="./">
              <img src={logo} className="img-fluid" alt="logo"></img>
              <p className="logo_underx text-white">x=independently organized <span  style={{color: "red"}}> TED </span>event</p>
            </Link>
          </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li onClick={ToggleButton}><Link className="nav-link scrollto" to="./">Home</Link></li>
              <li onClick={ToggleButton}><HashLink className="nav-link scrollto" to="/#teaser">Theme</HashLink></li>
              <li  className="dropdown"><a href="#" onClick={ToggleDropDown}><span>About</span> <i className="bi bi-chevron-down"></i></a>
                <ul >
                  <li  onClick={ToggleButton}><Link to="./about"><span>About Us</span></Link></li>
                  <li  onClick={ToggleButton}><Link to="./team"><span>TED<sup>x</sup> Team</span></Link></li>
                  <li  onClick={ToggleButton}><a href="https://www.iitj.ac.in/" target="_blank" rel="noreferrer"><span>IIT Jodhpur</span></a></li>
                </ul>  
              </li>
              <li className="dropdown"><a onClick={ToggleDropDown} href="#"><span>Speakers</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li  onClick={ToggleButton}><Link to="./speakers">Our Speakers</Link></li>
                  <li  onClick={ToggleButton}> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfemXEg95_e8vxkKPfuepGxiYN2HekYMS-vvAW8e5YpOWrcHg/viewform" target="_blank" rel="noreferrer">Apply To Speak</a></li>
                </ul>  
            </li>
              <li onClick={ToggleButton}><Link className="nav-link scrollto" to="./">Events</Link></li>
              <li onClick={ToggleButton}><HashLink className="nav-link scrollto" to="/#contact">Contact us</HashLink></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={onToggle} id="toggle-button"></i>
          </nav>
          <Link to="./" className="get-started-btn scrollto">Get Started</Link>
        </div>
      </header>
     
    </>
  );
};

export default Navbar;
