import React from "react";
import logo from '../assets/img/logo-white.png';

const Navbar = () => {
  const onToggle = () => {
    let navbarid = document.getElementById("navbar");
    navbarid.classList.toggle("navbar-mobile");
    //  navbarid.classList.toggle('bi-list')
    //  navbarid.classList.toggle('bi-x')
  };

  const ToggleButton = () => {
    console.log("Abhishek");
    let navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      let navbarToggle = document.getElementById("toggle-button");
      // navbarToggle.classList.toggle('bi-x')
      navbarToggle.classList.add("bi-list");
    }
  };

  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto primary">
            <a href="./">
              {/* TED<sup>x</sup>{" "}
              <span style={{ color: "Black" }}>IIT Jodhpur.</span> */}
              <img src={logo} class="img-fluid" alt="logo"></img>
              <p class="logo_underx text-white">
                x=  independently organized <span  style={{color: "red"}}> TED </span>
                event
              </p>
            </a>
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto " href="#hero">
                  Home
                </a>
              </li>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto" href="#counts">
                  About
                </a>
              </li>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto" href="#team">
                  Speakers
                </a>
              </li>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto " href="./gallery">
                  Gallery
                </a>
              </li>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto" href="#portfolio">
                  Team
                </a>
              </li>
              <li onClick={ToggleButton}>
                <a class="nav-link scrollto" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
            <i
              class="bi bi-list mobile-nav-toggle"
              onClick={onToggle}
              id="toggle-button"
            ></i>
          </nav>
          <a href="#about" class="get-started-btn scrollto">
            Get Started
          </a>
        </div>
      </header>
      <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
            <div class="col-xl-8">
              <h1>Welcome to <span style={{color: 'red'}}>TEDx </span>IIT Jodhpur</h1>
              <h2>
               Let's come together on a journey beyond words 
              </h2>

              <a href="#team" class="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
