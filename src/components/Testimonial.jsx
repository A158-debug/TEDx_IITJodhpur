import React from "react";
import home1 from "../assets/img/Home/home1.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <section id="testimonials" class="testimonials" style={{backgroundColor:'black'}}>
        <div class="container " data-aos="fade-up">
          <div class="section-title">
            <h2>TOP TEDx TALKS</h2>
          </div>
          <div className="">
            <Slider {...settings}>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/qp0HIF3SfI4`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">How great leaders inspire action</p>
                  <p>
                    Simon Sinek has a simple but powerful model for
                    inspirational leadership -- starting with a golden circle
                    and the question: "Why?" His examples include Apple, Martin
                    Luther King Jr. and the Wright brothers
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/iCvmsMzlF7o`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">How great leaders inspire action</p>
                  <p>
                    Simon Sinek has a simple but powerful model for
                    inspirational leadership -- starting with a golden circle
                    and the question: "Why?" His examples include Apple, Martin
                    Luther King Jr. and the Wright brothers
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/KM4Xe6Dlp0Y`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">How great leaders inspire action</p>
                  <p>
                    Simon Sinek has a simple but powerful model for
                    inspirational leadership -- starting with a golden circle
                    and the question: "Why?" His examples include Apple, Martin
                    Luther King Jr. and the Wright brothers
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/fLJsdqxnZb0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">How great leaders inspire action</p>
                  <p>
                    Simon Sinek has a simple but powerful model for
                    inspirational leadership -- starting with a golden circle
                    and the question: "Why?" His examples include Apple, Martin
                    Luther King Jr. and the Wright brothers
                  </p>
                </div>
              </div>
              <div className="p-2 m-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/iMBJrvEwv8s`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <div className="testimonial_content mt-2">
                  <p className="text-white testimonial_content_heading">Why Having Fun Is the Secret to a Healthier Life </p>
                  <p>
                    Simon Sinek has a simple but powerful model for
                    inspirational leadership -- starting with a golden circle
                    and the question: "Why?" His examples include Apple, Martin
                    Luther King Jr. and the Wright brothers
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container">
            <div className="row mt-5  justify-content-center ">
                <p className="testimonial_border text-center">View more talks</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
