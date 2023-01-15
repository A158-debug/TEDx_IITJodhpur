import React from "react";
import './Event.css'

const Events = () => {
  return (
    <section className="mt-5 event__section">
      <div className="container mt-5">
        <div className="row text-center">
          <h3>Come And Join Us For The</h3>
           <div className=" event__section_heading my-2">
           <h1 className=" p-3 mt-3">TED-X-BOUT</h1>
          <h2>
            WHAT DO YOU UNDERSTAND BY OUR <br /> THEME "THE NEW DIMENSION" ?{" "}
          </h2>
           </div>
          <h2 className="mt-3">Participate and Win Exciting Prizes !</h2>
        </div>
        <div className="row p-5 event__section_rules ">
          <h2>Rules : </h2>
          <ol>
            <li>Individual Participation ( IIT J Students Only )</li>
            <li>
              Submit Your Thoughts/Views/Opinions in a Single Slider format.
            </li>
            <li>
              Display your creativity by submitting it in any format, such as a
              poster, PPT, pictures, etc.
            </li>
            <li>Email your entries to tedx@iitj.ac.in</li>
            <li>The submission deadline is January 16, 2023, at 19:30 hrs.</li>
            <li>
              Include your name, roll number, email address, course, year,
              photograph and contact information in your email submission.
            </li>
            <li>The email subject should be " TEDx-Bout Submission "</li>
            <li>No repetitive entries & plagiarism will be allowed.</li>
            <li>Winners will be announced on 17 Jan 2023</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Events;
