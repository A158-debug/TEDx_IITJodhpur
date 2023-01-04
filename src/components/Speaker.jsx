import React,{useEffect} from 'react'
import team1 from "../assets/img/speakers/team-1.jpg";
import team2 from "../assets/img/speakers/team-2.jpg";
import team3 from "../assets/img/speakers/team-3.jpg";
import team4 from "../assets/img/speakers/team-4.jpg";
import team5 from "../assets/img/speakers/team-5.jpg";

const speaker_card = [
  { img: team3, id: 3, name: "Founder of Military Official", position: "CTO" },
  { img: team4, id: 4, name: "Cricketer", position: "Accountant" },
  { img: team1, id: 5, name: "Academia", position: "Chief Executive Officer", },
  { img: team2, id: 6, name: "Actor", position: "Product Manager" },
  { img: team3, id: 7, name: "Climate Activist", position: "CTO" },
  { img: team4, id: 8, name: "Founder & CEO", position: "Accountant" },
];

const Speaker = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <section id="team" class="team mt-5">
        <div class="container">
          <div class="section-title">
            <h2>
              <span class={{ color: "Red" }}>OUR</span> SPEAKERS
            </h2>
          </div>
          <div class="row justify-content-center p-5">
            {speaker_card.map((e) => (
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <div class="member-img">
                    <img src={team5} class="img-fluid" alt="" />
                    {/* <div class="social">
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
                    </div> */}
                  </div>
                  <div class="member-info">      
                    <h4 className="text-center">{e.name}</h4>
                    {/* <span>{e.position}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Speaker