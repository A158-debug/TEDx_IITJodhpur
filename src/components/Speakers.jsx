import React from "react";
import Speaker from './Speaker'

const Speakers = () => {
  return (
    <>
      <section className="about-fixed-image fixed-image-heading mt-5">
        <div>
          <h1 className="my-4 text-center">  <span style={{color: "red"}}>TEDx</span>  IIT Jodhpur Speakers</h1>
          <h2 className="p-5 my-3 text-center blur-fixed-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id assumenda sunt pariatur odio neque.. </h2>  
        </div>
      </section>
      <Speaker/>
    </>
  );
};

export default Speakers;
