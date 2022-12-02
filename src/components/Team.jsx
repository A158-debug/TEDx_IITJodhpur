import React, {useState} from "react";
import portfolio_1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio_2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio_3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio_4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio_5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio_6 from "../assets/img/portfolio/portfolio-6.jpg";
import portfolio_7 from "../assets/img/portfolio/portfolio-7.jpg";
import portfolio_8 from "../assets/img/portfolio/portfolio-8.jpg";
import portfolio_9 from "../assets/img/portfolio/portfolio-9.jpg";

const Team_cards = [
  { img: portfolio_1, info: "ALL", id:1 },
  { img: portfolio_2, info: "HEAD" , id:2},
  { img: portfolio_3, info: "WEB" , id:3},
  { img: portfolio_4, info: "ALL" , id:4},
  { img: portfolio_5, info: "ALL", id:5 },
  { img: portfolio_6, info: "HEAD", id:6 },
  { img: portfolio_7, info: "HEAD", id:7 },
  { img: portfolio_8, info: "ALL" , id:8},
  { img: portfolio_9, info: "WEB" , id:9 },
];



const Team = () => {

  const [items, setItems] = useState(Team_cards)
  const filterItem = (e)=>{
    console.log(items)
    var updatedItem = Team_cards.filter((curr)=> {return curr.info === e})
    setItems(updatedItem)
 }
  return (
    <>
      <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Our Team</h2>
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
                <li  onClick={()=>filterItem('HEAD')}>Head</li>
                {/* <li onClick={()=>filterItem('HEAD')}>Core Members</li> */}
                <li onClick={()=>filterItem('WEB')}>Web</li>
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
                <div class="portfolio-wrap">
                  <img src={e.img} class="img-fluid" alt="" />
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
