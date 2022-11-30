import React from 'react'

import tabs1 from './assets/img/tabs-5.jpg'
import tabs2 from './assets/img/tabs-6.jpg'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Team from './components/Team'
import Speakers from './components/Speakers'


const App = () => {
  return (
    <>
      <Navbar/>
      <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
            <div class="col-xl-8">
              <h1>Welcome to TEDx IIT Jodhpur</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae iure dolorem amet fugiat minus.</h2>
      
              <a href="#team" class="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
        </div>

      </section>

      <main id="main">
        <section id="counts" class="counts">
          <div class="container" data-aos="fade-up">

            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="bi bi-people"></i>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Hard Workers</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section id="tabs" class="tabs">
          <div class="container" data-aos="fade-up">

            <ul class="nav nav-tabs row d-flex">
              <li class="nav-item col-3">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" href="./">
                  <i class="ri-gps-line"></i>
                  <h4 class="d-none d-lg-block">What is TED<sup>x</sup> </h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" href="./">
                  <i class="ri-body-scan-line"></i>
                  <h4 class="d-none d-lg-block">What is TED<sup>x</sup> IIT Jodhpur</h4>
                </a>
              </li>
              {/* <li class="nav-item col-3">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3" href="./">
                  <i class="ri-sun-line"></i>
                  <h4 class="d-none d-lg-block">Pariatur explica nitro dela</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4" href="./">
                  <i class="ri-store-line"></i>
                  <h4 class="d-none d-lg-block">Nostrum qui dile node</h4>
                </a>
              </li> */}
            </ul>

            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                    <img src={tabs1} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={tabs2} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                    </ul>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="./assets/img/tabs-3.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p class="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="./assets/img/tabs-4.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="about" class="about section-bg">
          <div class="container" data-aos="fade-up">
            <div class="row no-gutters">
              <div class="content col-xl-5 d-flex align-items-stretch">
                <div class="content">
                  <h3>Reason To Partner With Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <a href="./" class="about-btn"><span>About us</span> <i class="bx bx-chevron-right"></i></a>
                </div>
              </div>
              <div class="col-xl-7 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                      <i class="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                      <i class="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris nisi</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                      <i class="bx bx-images"></i>
                      <h4>Labore consequatur</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                    <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                      <i class="bx bx-shield"></i>
                      <h4>Beatae veritatis</h4>
                      <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
       <Speakers/>
       <Team/>
       <Contact/>
      </main>

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Presento<span>.</span></h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="./">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="./">About us</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="./">Speakers</a></li>
              
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
                <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="./"> Gallery</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="./">Team</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="./"> Contact Us</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container flex py-4 ">
          <div class="me-md-auto text-center text-md-star ">
            <div class="copyright">
              &copy; Copyright <strong><span>TED<sup>x</sup>IIT Jodhpur</span></strong>
            </div>
            <div class="credits text-center">
              Designed by <a href="https://bootstrapmade.com/">TED<sup>x</sup>IIT Jodhpur</a>
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
  )
}

export default App