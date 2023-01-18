import React,{useEffect} from "react";
import Speaker from "./Speaker";
import Contact from "./Contact";
import home1 from "../assets/img/Home/home1.jpg";
import CountDown from "./CountDown/CountDown";
import Testimonial from "./Testimonial";
import Theme from "./Theme";
import TimeLine from "./TimeLine";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="80">
          <div className="row text-center">
            <h1>THE NEW DIMENSION</h1>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row text-start text-md-center" data-aos="fade-up" data-aos-delay="70">
            <div className="theme__section">
              <h1> HELLO <span className="text-white">STRANGER</span></h1>
              <p style={{ color: "#ffffffcc" }}> Are you ready to unravel the unexplored? </p>
              <CountDown deadline="January, 19, 2023" />
              <p className="p-md-5 p-0">
                To unlock the untapped opportunities and experience an
                unrestricted rush ? As the new level enters play, there is a
                dynamic, fiery, and innovative energy in the air encouraging us
                to see beyond what is to what it may be! &nbsp;
                <span style={{ color: "red", fontWeight: "bold" }}>TEDx </span>
                IIT Jodhpur is here to transport you into a thrilling NEW
                DIMENSION and open your eyes to the possibilities of anything we
                can imagine, but outside the box !
              </p>
            </div>
          </div>   
        </div>
      </section>

      <section className="p-md-0 p-2">
        <div className="container-fluid">
        <div className="row  theme__section_dimension" data-aos="fade-up" data-aos-delay="70">
            <div className="col-md-5">
              <img src={home1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-end ">
              <div className="mb-md-5 mb-0">
                <h1 >THE NEW DIMENSION <br/> JANUARY 19th, 2023</h1>
                <div className="">
                  <a href="https://forms.gle/Cf5uTZcrViPhSjuN8" target="_blank" rel="noreferrer" className="get-started-btn scrollto p-3 ">GET TICKETS <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Theme/>

      {/*----------------Reason to be partner with us -------------------*/}
      <section id="about" className="about section-bg mb-5">
        <div className="container partner_reason" data-aos="fade-up">
          <div className="row">
            <div className="content ">
                <h3>This is <span style={{color: "red"}}>  How We do It </span></h3>
                <p>
                  We are looking for speakers or performers who have radically
                  new ideas, exposing cutting-edge research, technology, design,
                  and more
                </p>
              
            </div>
          </div>
          <div className="row">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-md-4 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bx bx-receipt"></i>
                  <h4>Events</h4>
                  <p>
                    Our mission is to inspire and inform by unleashing hidden,
                    groundbreaking and unique ideas worth spreading from all
                    over the world. We host conferences with live TEDxTalks and
                    cover a diversity of topics, ranging from technology,
                    entertainment & design to science, art & global issues.
                  </p>
                </div>
                <div
                  className="col-md-4 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Community</h4>
                  <p>
                    TEDxIIT Jodhpur is a globally-minded local community,
                    welcoming people from every discipline and culture who seek
                    a deeper understanding of the world. This growing group of
                    curious individuals engage with ideas and each other, both
                    online and at live events, all year long.
                  </p>
                </div>
                <div
                  className="col-md-4 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bx bx-images"></i>
                  <h4>Online</h4>
                  <p>
                    Long enough to explore a challenging perspective but short
                    enough to read in a single sitting, our online channels pick
                    up where Talks leave off. Discover new ideas every day in
                    our Online Magazine, our Social Media and our Noteworthy
                    Newsletter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid p-5" style={{ backgroundColor: "#FE2A06" }}>
        <div className="row" data-aos="fade-up" data-aos-delay="70">
          <h1 className="theme-section-heading3 text-center text-uppercase ">
            So stay tuned as we take you on an unbelievable journey to this new
            dimension where you will discover your new self!
          </h1>
        </div>
      </div>

      <Testimonial/>
      <Speaker />
      <TimeLine/>

      <section className="fixed-image mt-5">
        <h1> Be With Us </h1>
      </section>

      <Contact />
    </>
  );
};

export default Home;
