import React from "react";
import tabs1 from '../assets/img/tabs-5.jpg'
import tabs2 from '../assets/img/tabs-6.jpg'
import herobg2 from '../assets/img/herobg2.jpg'
const About = () => {
  return (
    <>
      <section id="tabs" class="tabs">
        <div class="container" data-aos="fade-up">
          <ul class="nav nav-tabs row d-flex">
            <li class="nav-item col-3">
              <a
                class="nav-link active show text-white"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
                href="./"
              >
                <i class="ri-gps-line"></i>
                <h4 class="d-none d-lg-block">
                  What is TED
                </h4>
              </a>
            </li>
            <li class="nav-item col-3">
              <a
                class="nav-link text-white"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
                href="./"
              >
                <i class="ri-body-scan-line"></i>
                <h4 class="d-none d-lg-block">
                  What is TED<sup>x</sup> IIT Jodhpur
                </h4>
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div
                  class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>
                  TED is a nonprofit organization devoted to Ideas Worth Spreading.
                  </h3>
                  <p class="fst-italic">
                  Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives.
                  </p>
                  <ul>
                    <li>
                      <i class="ri-check-double-line"></i>The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less.
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> The annual TED Conference takes place each spring in Vancouver, British Columbia. TED’s media initiatives include TED.com, where new TED Talks are posted daily
                    </li>
                  </ul>
                </div>
                <div
                  class="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img src={tabs1} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>
                    Neque exercitationem debitis soluta quos debitis quo
                    mollitia officia est
                  </h3>
                  <p>
                  In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience
                  </p>
                  <p class="fst-italic">
                  Our event is called TEDxIITJodhpur, where x = independently organized TED event
                  </p>
                  <ul>
                    <li>
                      <i class="ri-check-double-line"></i>At our TEDxIITJodhpur event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> Provident mollitia
                      neque rerum asperiores dolores quos qui a. Ipsum neque
                      dolor voluptate nisi sed.
                    </li>
                    <li>
                      <i class="ri-check-double-line"></i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tabs2} alt="" class="img-fluid" />
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
                We are looking for speakers or performers who have radically new ideas, exposing cutting-edge research, technology, design, and more
                </p>
                <a href="./" class="about-btn">
                  <span>About us</span> <i class="bx bx-chevron-right"></i>
                </a>
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
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="fixed-image">  
          <img src={herobg2} alt="" className="img-fluid"/>
          <div className=""><h1> Be with us</h1></div>
      </section> */}
    </>
  );
};

export default About;
