import React from 'react'
import Speaker from './Speaker'
import Contact from './Contact'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
     <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <div class="row text-center">
            {/* <div class="col-xl-8">
              <h1>Welcome to <span style={{color: 'red'}}>TEDx </span>IIT Jodhpur</h1>
              <h2>Let's come together on a journey beyond words </h2>
              <a href="#team" class="btn-get-started scrollto">Get Started</a>
            </div> */}
            <h1>THE NEW DIMENSION</h1>
            {/* <img src={theme} alt="" class="img-fluid" /> */}
          </div>
        </div>
      </section>
     
      <section id="about" class="about section-bg mb-5">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch">
              <div class="content">
                <h3>Reason To Partner With Us</h3>
                <p>
                We are looking for speakers or performers who have radically new ideas, exposing cutting-edge research, technology, design, and more
                </p>
                <Link to="./about" class="about-btn">
                  <span>About us</span> <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-xl-7 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="bx bx-receipt"></i>
                    <h4>Brand Linking</h4>
                    <p>
                    Associate with a powerful worldwide brand and movement synonymous with creativity, collaboration, and innovation
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="bx bx-cube-alt"></i>
                    <h4>Lead Generation</h4>
                    <p>
                    Gain highly qualified leads from tuned-in intellectuals across a variety of industries, including education, healthcare, and technology.
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="bx bx-images"></i>
                    <h4>Unconventional</h4>
                    <p>
                    Access unconventional showcase opportunities unique to our conference, creating genuine experiences that drive higher engagement.
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i class="bx bx-shield"></i>
                    <h4>Diversity</h4>
                    <p>
                    We provide a venue for respectful conversations and exchange of ideas among all people
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Speaker/>
      <section className="fixed-image mt-5">  
          <h1> Be with us </h1>
      </section>
      <Contact />
    </>
  )
}

export default Home