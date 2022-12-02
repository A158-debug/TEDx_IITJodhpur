import React, {useState} from "react";
// import portfolio_1 from "../assets/img/portfolio/portfolio-1.jpg";
// import portfolio_2 from "../assets/img/portfolio/portfolio-2.jpg";
// import portfolio_3 from "../assets/img/portfolio/portfolio-3.jpg";
// import portfolio_4 from "../assets/img/portfolio/portfolio-4.jpg";
// import portfolio_5 from "../assets/img/portfolio/portfolio-5.jpg";
// import portfolio_6 from "../assets/img/portfolio/portfolio-6.jpg";
// import portfolio_7 from "../assets/img/portfolio/portfolio-7.jpg";
// import portfolio_8 from "../assets/img/portfolio/portfolio-8.jpg";
// import portfolio_9 from "../assets/img/portfolio/portfolio-9.jpg";

import Abhishek from '../assets/img/portfolio/AbhishekKumar.png';
import Deepika from '../assets/img/portfolio/DeepikaGupta.jpeg';
import Dheemant from '../assets/img/portfolio/Dheemant.jpeg';
import Harshit from '../assets/img/portfolio/HarshitMakhijani.jpeg';
import Inder from '../assets/img/portfolio/IndermohanKaur.jpeg';
import Kartik from '../assets/img/portfolio/KartikChoudhary.jpeg';
import Prachiti from '../assets/img/portfolio/PrachitiDad.jpeg';
import Shivangi from '../assets/img/portfolio/ShivangiMadhavi.jpeg';
import Yash from '../assets/img/portfolio/YashRuhatiya.jpg';
import Chakshu from '../assets/img/portfolio/Chakshu.jpeg'
import Aman from '../assets/img/portfolio/Aman.jpeg';

const Team_cards = [
  { img: Kartik, info: "ORGANIZER", id:6 },
  { img: Yash, info: "ORGANIZER" , id:9 },
  { img: Abhishek, info: "HEAD", id:1 },
  { img: Deepika, info: "HEAD" , id:2},
  { img: Dheemant, info: "HEAD" , id:3},
  { img: Harshit, info: "HEAD" , id:4},
  { img: Inder, info: "HEAD", id:5 },
 
  { img: Prachiti, info: "HEAD", id:7 },
  { img: Shivangi, info: "HEAD" , id:8},
  
  { img: Aman, info: "HEAD" , id:10 },
  { img: Chakshu, info: "HEAD" , id:11 },
];



const Team = () => {

  const [items, setItems] = useState(Team_cards)
  const filterItem = (e)=>{
    if(e === 'ALL') setItems(Team_cards)
    else {
      var updatedItem = Team_cards.filter((curr)=> {return curr.info === e})
      setItems(updatedItem)
    }
    
 }
  return (
    <>
      <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2 style={{color:'red'}}>Our Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li onClick={()=>filterItem('ALL')}>All</li>
                <li  onClick={()=>filterItem('ORGANIZER')}>Organizer</li>
                <li onClick={()=>filterItem('HEAD')}>Head</li>
              </ul>
            </div>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {items.map((e) => (
              <div class="col-lg-4 col-md-6 portfolio-item filter-web" key = {e.id}>
                <div class="portfolio-wrap d-flex justify-content-center">
                  <img src={e.img} class="img-fluid" alt=""  />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a
                        href="./assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="200">
              <div class="member-img">
                <img src={portfolio_1} class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="member-img">
                <img src={portfolio_1} class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={portfolio_1}class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    </>
  );
};

export default Team;
