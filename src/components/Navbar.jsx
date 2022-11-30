import React, {useState} from 'react'

const Navbar = () => {
  const[Toggle, setToggle] = useState(true)
  const onToggle = ()=>{
      console.log(Toggle)
      setToggle((prev)=> !prev)
  }
  return (
    <>
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto primary"><a href="./">TED<sup>x</sup> <span style={{ color: 'Black' }}>IIT Jodhpur.</span>
            <p class="logo_underx">x= <span style={{ color: 'Black' }}>independently organized TED event</span></p>
          </a></h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#counts">About</a></li>
              <li><a class="nav-link scrollto" href="#team">Speakers</a></li>
              <li><a class="nav-link scrollto " href="./gallery">Gallery</a></li>
              <li><a class="nav-link scrollto" href="#portfolio">Team</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact us</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle" onClick={onToggle}></i>
          </nav>
          <a href="#about" class="get-started-btn scrollto">Get Started</a>
        </div>
      </header>
    </>
  )
}

export default Navbar