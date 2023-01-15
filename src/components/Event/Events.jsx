import React,{useEffect} from "react";
import "./Event.css";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="mt-md-5 mt-0 event__section">
      <div className="container mt-5">
        <div className="row text-center">
          <div className=" event__section_heading my-2 p-md-3 p-2">
            <h3>Come And Join Us For The</h3>

            <h1 className=" p-3 mt-3">TED-X-BOUT</h1>
            <h2>
              WHAT DO YOU UNDERSTAND BY OUR <br /> <span style={{color:'red'}}>THEME "THE NEW DIMENSION" ?</span> {" "}
            </h2>

            <h2 className="mt-3">Participate and Win Exciting Prizes !</h2>
          </div>
        </div>
        <div className="row mt-3 p-2 event__section_rules">
          <h2>Rules : </h2>
          <ol className="p-2 ">
            <li>Individual Participation </li>
            <li>
              Submit Your Thoughts/Views/Opinions in a Single Slider format.
            </li>
            <li>
            Extra weightage for your creativity if submitting in format, such as a poster, PPT, pictures, etc.
            </li>
            <li>Submit you entries vis a <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvnp31lhhice-6SkjBRW78ymO5sKaGU3E9b__CjD4ahy3Edg/viewform" target="_blank" rel="noreferrer">Google form Link</a> </li>
            <li>The submission deadline is January 16, 2023, at 11:59 hrs.</li>
            <li>No repetitive entries & plagiarism will be allowed.</li>
            <li>Winners will be announced on 17 Jan 2023</li>
            <li>Your entries will only be entertained if you have followed TEDx IIT Jodhpur social media handles.</li>
          </ol>
        </div>
        <div className="row p-2 event__section_prizes ">
        <h2>PRIZES : </h2>
        <ul>
          <li>1st Prize - 3k Cash + Goodies + Tshirt + Certificate</li>
          <li>2nd Prize - 2k Cash + Goodies + Certificate</li>
          <li>3rd Prize - 1K Cash + Certificate</li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
