import React,{useEffect} from "react";

// import Abhishek from "../assets/img/team/AbhishekKumar.png";
import Abhishek from "../assets/img/team/Abhishek1.png";
// import Deepika from "../assets/img/team/DeepikaGupta.png";
import Deepika from "../assets/img/team/Deepika1.jpeg";
import Dheemant from "../assets/img/team/Dheemant.png";
import Harshit from "../assets/img/team/Harshit.png";
import Inder from "../assets/img/team/Indermohan.png";
// import Kartik from "../assets/img/team/Kartik.png";
import Kartik from "../assets/img/team/Kartik1.jpeg";
import Prachiti from "../assets/img/team/Prachiti.png";
// import Shivangi from "../assets/img/team/Shivangi.png";
import Shivangi from "../assets/img/team/Shivangi1.jpeg";
import Yash from "../assets/img/team/Yash.png";
import Chakshu from "../assets/img/team/Chakshu.png";
import Aman from "../assets/img/team/Aman.png";
import Anuj from "../assets/img/team/Anuj.jpeg";

const Team_cards = [
  { img: Anuj, name: "Anuj Kapoor", info: "FACULTY ADVISOR", id: 1 },
  { img: Kartik, name: "Kartik Choudhary", info: "ORGANIZER", id: 2 },
  { img: Yash, name: "Yash Ruhatiya", info: "CO-ORGANIZER", id: 3 },
  { img: Abhishek, name: "Abhishek Kumar", info: "HEAD WEB DEVELOPMENT", id: 4},
  { img: Deepika, name: "Deepika Gupta", info: "HEAD MARKETING", id: 5 },
  { img: Dheemant, name: "Dheemant J", info: "HEAD MARKETING", id: 6 },
  { img: Harshit, name: "Harshit Makhijani", info: "HEAD LOGISTICS", id: 7 },
  { img: Inder, name: "InderMohan Kaur", info: "HEAD MARKETING", id: 8 },
  { img: Prachiti, name: "Prachiti Dad", info: "HEAD DESIGN AND CREATIVITY", id: 9},
  { img: Shivangi, name: "Shivangi Madhavi", info: "HEAD CURATOR", id: 10 },
  { img: Aman, name: "Aman Thakur", info: "HEAD CURATOR", id: 11 },
  { img: Chakshu, name: "Chakshu Dhannawat", info: "HEAD LOGISTICS", id: 12 },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="portfolio" className="portfolio">
        <section className="team-fixed-image fixed-image-heading">
          <div className="text-white d-flex flex-column justify-content-around">
            <h1 className="my-4 text-center">Meet Our <span style={{ color: "red" }}>TEDx</span> IIT Jodhpur Team</h1>
            <h2 className="my-3 text-center blur-fixed-image">
              Our team do everything from speaker selection, event coordination
              and volunteer management to marketing, fundraising, and graphic
              design. Our job is to find incredible ideas in and around our
              community, and to help speakers’ ideas develop into their best
              versions.
            </h2>
          </div>
        </section>

        <div className="container text-center mt-5" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{ color: "red" }}>Our Team</h2>
          </div>

          <div className="row team-img " data-aos="fade-up" data-aos-delay="200">
            {Team_cards.map((e) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
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
