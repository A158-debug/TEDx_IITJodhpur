import React from "react";
import logo from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container ">
            <div class="row ">
              <a href="./" class="text-center">
                <img src={logo} class="img-fluid footer-logo" alt="logo"></img>
                <p class="text-white" style={{ fontSize: "10px", margin: "0px" }}>
                  x= independently organized <span style={{ color: "red" }}> TED </span>event
                </p>
              </a>
            </div>
            <div className="row my-5">
              <ul className="d-flex justify-content-center align-content-center footer-links flex-row flex-wrap">
                <li><a href="./">Home</a></li>
                <li><a href="./">About </a></li>
                <li><a href="./">Speakers</a></li>
                <li><a href="./">Events</a></li>
                <li><a href="./">Gallery</a></li>
                <li><a href="./">Contacts</a></li>
              </ul>
            </div>
            <div className="row text-center social-links ">
            <a href="./" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="./" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="./" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="./" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="./" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div className="row mt-5 text-center footer-text">
              <p style={{ color: "grey" }}>© 2022 <span style={{color: "red" }}> TEDXIIT</span><span > JODHPUR</span>. THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENCE FROM TED   |  <span >TERMS & CONDITIONS  </span>  |  <span > ACCESSIBILITY</span></p>
            </div>
          </div>
        </div>

        <div class="container flex py-4 ">
          <div class="me-md-auto text-center text-md-star ">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>
                  {" "}
                  TED<sup>x</sup>IIT Jodhpur
                </span>
              </strong>
            </div>
            <div class="credits text-center">
              Designed by{" "}
              <a href="https://bootstrapmade.com/">
                TED<sup>x</sup>IIT Jodhpur
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
