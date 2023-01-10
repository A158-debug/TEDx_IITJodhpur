import React,{useEffect} from "react";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="about-fixed-image fixed-image-heading mt-5 d-flex align-content-center">
        <div className="d-flex flex-column justify-content-around">
          <h1 className="my-4 text-center" data-aos="fade-up" data-aos-delay="70"> About <span style={{color: "red"}}>TEDx</span>  IIT Jodhpur </h1>
          <h2 className="text-center blur-fixed-image" data-aos="fade-up" data-aos-delay="80">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organised events that bring people together to share a TED-like experience. </h2>  
        </div>
      </section>

      <section>
        <div className="container about-heading">
          <div className="row text-center "><h1 className="">About TED</h1></div>
          <div className="row my-5">
            <div className="col-md-6">
              <p className="">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world’s
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
            </div>
            <div className="col-md-6"><img src={about1} className="img-fluid" alt="" /></div>
          </div>
        </div>

        <div className="container about-heading1">
          <div className="row">
            <h1 className="text-center p-md-5 p-3">To bring the <span>TED</span> experience to a wider audience, <span>TED</span> created a program called <span>TEDx</span></h1>
          </div>
        </div>

        {/*----------------- About Tedx--------------- */}
        <div className="container-fluid p-5 my-5 about-heading bg-white">
          <div className="row my-1 text-center">
            <h1>About TEDx</h1>
          </div>
          <div className="row text-black text-center">
            <p>
              At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations)
            </p>
          </div>
        </div>

        {/*--------------------- Section - 3 ------------------------*/}
        <div className="container about-heading">
          <div className="row">
            <div className="col-md-6 ">
              <img src={about2} className="img-fluid " alt="" />
            </div>
            <div className="col-md-6 p-md-5 p-2 d-flex flex-column justify-content-center align-content-center">
              <p>
                The annual TED Conference takes place each spring in Vancouver,
                British Columbia. TED’s media initiatives include TED.com, where
                new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations
                from volunteers worldwide the educational initiative TED-Ed.{" "}
              </p>
              <p>
                TED has established The Audacious Project that takes a
                collaborative approach to funding ideas with the potential to
                create change at thrilling scale TEDx
              </p>
              <p>
                which supports individuals or groups in hosting local, self-
                organized TED-style events around the world, and the TED Fellows
                program, helping world-changing innovators from around the globe
                to amplify the impact of their remarkable projects and
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
