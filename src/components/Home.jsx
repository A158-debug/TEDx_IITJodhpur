import React from 'react'
import Speaker from './Speaker'
import Contact from './Contact'
import {Link} from 'react-router-dom'
import logo from '../assets/img/logo-white.png';
import home1 from '../assets/img/Home/home1.jpg'
// import theme3 from '../assets/img/theme3.jpg'
const Home = () => {
  return (
    <> 
       {/*----------Theme Photo ---------------*/}
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

      {/*---------- Theme Content-------------------*/}
     <section>
      <div className="container-lg theme-section">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="70">
            <h1 className="theme-section-heading1"  >HELLO STRANGER</h1>
            <p>Are you ready to unravel the unexplored?</p>
            <p>To unlock the untapped opportunities and experience an unrestricted rush? As the new level enters play, there is a dynamic, fiery, and innovative energy in the air encouraging us to see beyond what is to what it may be! TEDxIITJodhpur is here to transport you into a thrilling NEW DIMENSION and open your eyes to the possibilities of anything we can imagine, but outside the box!</p>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="70">
            <img src={home1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="70">
            <p>We are here to dispel the notion of limitations, to break down the boundaries imposed by the current dimensions of reality, and to fully realize our potential. To learn from the mistakes of the past, to persevere through the most difficult challenges, and to bring about change so that success becomes more than just a tale, and failure acts as a spark to rekindle rather than extinguish the flame of desire. Where every breath feels worthwhile and the future is constantly overwhelming but undetermined, untitled, and unbound!</p>
          </div>
          <div className="col-md-6 theme-section-heading2 d-flex justify-content-center align-items-end" data-aos="fade-up" data-aos-delay="70">
            <div className="div">
              <h1>THE NEW DIMENSION</h1>
              <h1 style={{color:'#FE2A06', borderTop: '1px solid white'}}>TED<sup>x</sup><span style={{color: "white"}}> IIT JODHPUR</span> </h1>
              <div style={{float: 'right'}}>
                <h2 style={{color:'#FE2A06'}}>19<sup>th</sup> January</h2>
                <button type="button" class="btn btn-danger btn-lg m-2" >RE WATCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <div className="container-fluid p-5" style={{backgroundColor:'#FE2A06'}}>
      <div className="row" data-aos="fade-up" data-aos-delay="70">
        <h1 className="theme-section-heading3 text-center mt-5">
          So stay tuned as we take you on an unbelievable journey to this new dimension where you will discover your new self!
        </h1>
      </div>
     </div>

      {/*----------------Reason to be partner with us -------------------*/}
      <section id="about" class="about section-bg mb-5">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="content col-xl-5 d-flex align-items-stretch">
              <div class="content">
                <h3>Reason To Partner With Us</h3>
                <p>We are looking for speakers or performers who have radically new ideas, exposing cutting-edge research, technology, design, and more</p>
                <Link to="./about" class="about-btn">
                  <span>About us</span> <i class="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-xl-7 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i class="bx bx-receipt"></i>
                    <h4>Brand Linking</h4>
                    <p>Associate with a powerful worldwide brand and movement synonymous with creativity, collaboration, and innovation</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Lead Generation</h4>
                    <p>Gain highly qualified leads from tuned-in intellectuals across a variety of industries, including education, healthcare, and technology.</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i class="bx bx-images"></i>
                    <h4>Unconventional</h4>
                    <p>Access unconventional showcase opportunities unique to our conference, creating genuine experiences that drive higher engagement.</p>
                  </div>
                  <div class="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <i class="bx bx-shield"></i>
                    <h4>Diversity</h4>
                    <p>We provide a venue for respectful conversations and exchange of ideas among all people</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*---------------- Speaker -------------------*/}
      <Speaker/>
      <section className="fixed-image mt-5"><h1> Be with us </h1></section>

      {/*---------------- Contacts -------------------*/}
      <Contact />
    </>
  )
}

export default Home