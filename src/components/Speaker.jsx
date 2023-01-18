import React,{useEffect} from 'react'
import Abhishek from '../../src/assets/img/speakers/Abhishek_Surana.jpeg'
import Akshat from '../../src/assets/img/speakers/Akshat_Gupta.jpeg'
import Aman from '../../src/assets/img/speakers/Aman_Goel.png'
import Kiran from '../../src/assets/img/speakers/Kiran_Verma.jpeg'
import Kuldeep from '../../src/assets/img/speakers/Kuldeep_Singh.jpeg'
import Licypriya from '../../src/assets/img/speakers/Licypriya_Kangujam.jpeg'
import Ruman from '../../src/assets/img/speakers/Ruma_Devi.jpeg'
import Rahul from '../../src/assets/img/speakers/Rahul.jpeg'
const speaker_card = [
  { img: Licypriya, id: 1, name: "Licypriya Kangujam ", position: "India's Youngest Climate Activist" },
  { img: Akshat, id: 2, name: "Akshat Gupta", position: "Author, Poet, Lyricist, Screenwriter", },
  { img: Aman, id: 3, name: "Aman Goel ", position: "CEO & Co-founder Cogno AI,Angel Investor" },
  { img: Kuldeep, id: 4, name: "Dr. Kuldeep Singh", position: "Public Health Expert Dean Academics, AIIMS Jodhpur" },
  { img: Ruman, id: 5, name: "Ruma Devi", position: "Social Activist -Recipient of Highest Civilian Honour for Women in India, Nari Shakti Puraskar" },
  { img: Kiran, id: 6, name: "Kiran Verma", position: "Community Leader and Change Maker - Founder Simply Blood" },
  { img: Abhishek, id: 7, name: "Abhishek Surana", position: "IAS CEO, Zila Parishad Jodhpur" },
  { img: Rahul, id: 8, name: "Rahul Chaudhari", position: "Indian International Kabaddi Player" },
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
                    <img src={e.img} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">      
                    <h4 className="text-center">{e.name}</h4>
                    <span className="text-center">{e.position}</span>
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