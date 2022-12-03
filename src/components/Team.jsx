import React from "react";

import Abhishek from "../assets/img/portfolio/AbhishekKumar.png";
import Deepika from "../assets/img/portfolio/DeepikaGupta.png";
import Dheemant from "../assets/img/portfolio/Dheemant.png";
import Harshit from "../assets/img/portfolio/Harshit.png";
import Inder from "../assets/img/portfolio/Indermohan.png";
import Kartik from "../assets/img/portfolio/Kartik.png";
import Prachiti from "../assets/img/portfolio/Prachiti.png";
import Shivangi from "../assets/img/portfolio/Shivangi.png";
import Yash from "../assets/img/portfolio/Yash.png";
import Chakshu from "../assets/img/portfolio/Chakshu.png";
import Aman from "../assets/img/portfolio/Aman.png";

const Team_cards = [
  { img: Kartik, name: "Kartik Choudhary", info: "ORGANIZER", id: 6 },
  { img: Yash, name: "Yash Ruhatiya", info: "CO-ORGANIZER", id: 9 },
  {
    img: Abhishek,
    name: "Abhishek Kumar",
    info: "HEAD WEB DEVELOPMENT",
    id: 1,
  },
  { img: Deepika, name: "Deepika Gupta", info: "HEAD MARKETING", id: 2 },
  { img: Dheemant, name: "Dheemant J", info: "HEAD MARKETING", id: 3 },
  { img: Harshit, name: "Harshit Makhijani", info: "HEAD LOGISTICS", id: 4 },
  { img: Inder, name: "InderMohan Kaur", info: "HEAD MARKETING", id: 5 },

  {
    img: Prachiti,
    name: "Prachiti Dad",
    info: "HEAD DESIGN AND CREATIVITY",
    id: 7,
  },
  { img: Shivangi, name: "Shivangi Madhavi", info: "HEAD CURATOR", id: 8 },

  { img: Aman, name: "Aman Thakur", info: "HEAD CURATOR", id: 10 },
  { img: Chakshu, name: "Chakshu Dhannawat", info: "HEAD LOGISTICS", id: 11 },
];

const Team = () => {
  return (
    <>
      <section id="portfolio" class="portfolio">
        <div className="container text-center" data-aos="fade-up">
          <div class="section-title">
            <h2 style={{ color: "red" }}>Our Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <div className="row team-img" data-aos="fade-up" data-aos-delay="200">
            {Team_cards.map((e) => (
              <div className="col mb-5">
                <img src={e.img} alt="" />
                <p className="head-name">{e.name}</p>
                <p className="head-designation">{e.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
