import React from "react";
import Speaker from './Speaker'

const Speakers = () => {
  return (
    <>
      <section className="about-fixed-image fixed-image-heading mt-5">
        <div>
          <h1 className="my-4 text-center">  <span style={{color: "red"}}>TEDx</span>  IIT Jodhpur Speakers</h1>
          <h2 className="my-3 text-center blur-fixed-image">Thinkers. Doers. Idea-generators. These are the speakers who have delivered a fantastic talks. Whether the talk was given at an official TED conference, at one of thousands of local, independently organized TEDx events, or on another stage altogether, these are the people who brought it to life. </h2>  
        </div>
      </section>
      <Speaker/>
    </>
  );
};

export default Speakers;
