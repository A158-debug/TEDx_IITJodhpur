import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 footer-contact">
                <h3>
                  TED <sup>x</sup>IIT Jodhpur
                </h3>
                <p>
                NH 62, Surpura Bypass Rd, Karwar <br />
                Rajasthan 342030
                  <br />
                 India <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="./">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="./">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="./">Speakers</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="./"> Gallery</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="./">Team</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="./"> Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div> */}
            </div>
          </div>
        </div>

        <div class="container flex py-4 ">
          <div class="me-md-auto text-center text-md-star ">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong><span> TED<sup>x</sup>IIT Jodhpur</span></strong>
            </div>
            <div class="credits text-center">
              Designed by{" "}
              <a href="https://bootstrapmade.com/">
                TED<sup>x</sup>IIT Jodhpur
              </a>
            </div>
          </div>
          {/* <div class="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="./" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="./" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="./" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="./" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="./" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
