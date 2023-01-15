import React,{useEffect} from 'react'
import team1 from "../assets/img/speakers/team-1.jpg";
import team2 from "../assets/img/speakers/team-2.jpg";
import team3 from "../assets/img/speakers/team-3.jpg";
import team4 from "../assets/img/speakers/team-4.jpg";
import team5 from "../assets/img/speakers/team-5.jpg";

const speaker_card = [
  { img: team3, id: 1, name: "Government Official", position: "CTO" },
  { img: team1, id: 2, name: "CEO and Founder", position: "Chief Executive Officer", },
  { img: team2, id: 3, name: "Author Poet | Lyricist | Screenwriter", position: "Product Manager" },
  { img: team3, id: 4, name: "Climate Activist", position: "CTO" },
  { img: team4, id: 5, name: "Social Worker | Fashion Designer", position: "Accountant" },
  { img: team4, id: 6, name: "Playback Singer", position: "Accountant" },
  { img: team4, id: 7, name: "Athlete", position: "Accountant" },
];

const Speaker = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <section id="team" className="team mt-5">
        <div className="container">
          <div className="section-title">
            <h2 className=''>
             <span className="text-white">  OUR</span>  SPEAKERS
            </h2>
          </div>
          <div className="row justify-content-center p-5">
            {speaker_card.map((e) => (
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={e.id}>
                <div className="member">
                  <div className="member-img">
                    <img src={team5} className="img-fluid" alt="" />
                    {/* <div className="social">
                      <a href="./">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="./">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="./">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="./">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                  <div className="member-info">      
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