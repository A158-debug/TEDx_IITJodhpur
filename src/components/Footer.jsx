import React,{useState} from "react";
import logo from "../assets/img/logo-white.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(true?scrolled>300:false)
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container ">
            <div className="row ">
              <a href="./" className="text-center">
                <img src={logo} className="img-fluid footer-logo" alt="logo"></img>
                <p className="text-white" style={{ fontSize: "10px", margin: "0px" }}>
                  x= independently organized <span style={{ color: "red" }}> TED </span>event
                </p>
              </a>
            </div>
             {/* ------ footer links -------- */}
            <div className="row my-5">
              <ul className="d-flex justify-content-center align-content-center footer-links flex-row flex-wrap">
                <li><Link to="./">Home</Link></li>
                <li><Link to="./about">About </Link></li>
                <li><Link to="./speakers">Speakers</Link></li>
                <li><Link to="./events">Events</Link></li>
                <li><Link to="/#contact">Contacts</Link></li>
              </ul>
            </div>

            {/* ------ footer icons -------- */}
            <div className="row text-center social-links ">
              {/* <a href="./" className="twitter"><i className="bx bxl-twitter"></i></a> */}
              <a href="./" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/tedxiitjodhpur/" target="_blank" rel="noreferrer" className="instagram"><i className="bx bxl-instagram"></i></a>
              {/* <a href="./" className="google-plus"><i className="bx bxl-skype"></i></a> */}
              <a href="https://www.linkedin.com/company/tedx-iitjodhpur/" target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            <div className="row mt-5 text-center footer-text">
              <p style={{ color: "grey" }}>© 2022 <span style={{color: "red" }}> TEDXIIT</span><span > JODHPUR</span>. THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENCE FROM TED   |  <span >TERMS & CONDITIONS  </span>  |  <span > ACCESSIBILITY</span></p>
            </div>
          </div>
        </div>

       {/* ------copyright portion -------- */}
        <div className="container flex py-4 ">
          <div className="me-md-auto text-center text-md-star ">
            <div className="copyright">
              &copy; Copyright <strong><span>TED<sup>x</sup>IIT Jodhpur</span></strong>
            </div>
            <div className="text-center">Designed by <Link to="./"> TED<sup>x</sup>IIT Jodhpur</Link></div>
          </div>
        </div>
        <button onClick={scrollToTop} className="back-to-top" style={{display: visible ? 'inline' : 'none'}}><i className="bi bi-arrow-up-short"></i></button>
      </footer>
    </>
  );
};

export default Footer;
