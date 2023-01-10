import React from "react";
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
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section id="testimonials" className="testimonials" style={{backgroundColor:'black'}}>
        <div className="container " data-aos="fade-up">
          <div className="section-title">
            <h2> <span style={{color:'white'}}>TOP</span> TEDx TALKS</h2>
          </div>
          <div className="p-md-0 p-3">
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
                  <p className="text-white testimonial_content_heading">The power of vulnerability</p>
                  <p>
                  Brené Brown studies human connection -- our ability to empathize, belong, love. In a poignant, funny talk, she shares a deep insight from her research, one that sent her on a personal quest to know herself as well as to understand humanity. A talk to share.
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
                  <p className="text-white testimonial_content_heading">Looks aren't everything. Believe me</p>
                  <p>
                  Cameron Russell admits she won "a genetic lottery": she's tall, pretty and an underwear model. But don't judge her by her looks. In this fearless talk, she takes a wry look at the industry that had her looking highly seductive at barely 16 years old.
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
                  <p className="text-white testimonial_content_heading">The happy secret to better work</p>
                  <p>
                  We believe we should work hard in order to be happy, but could we be thinking about things backwards? In this fast-moving and very funny talk, psychologist Shawn Achor argues that, actually, happiness inspires us to be more productive.
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
                  Have you had your daily dose of fun? It's not just enjoyable, it's also essential for your health and happiness, says science journalist Catherine Price. She proposes a new definition of fun 
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container">
            <div className="row mt-5  justify-content-center ">
                <a href="https://www.ted.com/playlists/180/the_10_most_popular_tedx_talks"  target="_blank" rel="noreferrer" className="testimonial_border text-center text-white">View more talks</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
