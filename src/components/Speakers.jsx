import React from "react";
import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";
import team4 from "../assets/img/team/team-4.jpg";

const speaker_card = [
  {img: team1, id: 1, name: "Walter White", position: "Chief Executive Officer",},
  { img: team2, id: 2, name: "Sarah Jhonson", position: "Product Manager" },
  { img: team3, id: 3, name: "William Anderson", position: "CTO" },
  { img: team4, id: 4, name: "Amanda Jepson", position: "Accountant" },
  { img: team1, id: 5, name: "Walter White", position: "Chief Executive Officer", },
  { img: team2, id: 6, name: "Sarah Jhonson", position: "Product Manager" },
  { img: team3, id: 7, name: "William Anderson", position: "CTO" },
  { img: team4, id: 8, name: "Amanda Jepson", position: "Accountant" },
];

const Speakers = () => {
  return (
    <>
      <section id="team" class="team">
        <div class="container">
          <div class="section-title">
            <h2>
              {" "}
              <span class={{ color: "Red" }}>Our</span> Speakers
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
          <div class="row">
            {speaker_card.map((e) => (
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <div class="member-img">
                    <img src={e.img} class="img-fluid" alt="" />
                    <div class="social">
                      <a href="./">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="./">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="./">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="./">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>{e.name}</h4>
                    <span>{e.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
