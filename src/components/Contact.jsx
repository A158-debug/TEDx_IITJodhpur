import React,{useEffect} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm("service_65xnx85","template_73kpjml",e.target,'nWKEqZqoU-sjdCxug').then((res)=>
    console.log(res)).catch((e)=>console.log(e))
    e.target.reset()
    alert("Thank you contact us")
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>CONTACT</h2>
            <p>
             We would love to respond to your queries and help you succeed. Feel free to get in touch with us
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3 className="text-white">Our Address</h3>
                    <p>NH 62, Surpura Bypass Road, Karwar,Rajasthan 342030</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3  className="text-white">Email Us</h3>
                    <p>
                      tedx@iitj.ac.in
                      <br />
                     choudhary.21@iitj.ac.in
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3  className="text-white">Call Us</h3>
                    <p>
                    Organizer Kartik : +91 9805397585   
                      </p>
                    <p>
                    Curator Shivangi :  +91 9529107219  
                     </p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-lg-6">
              <form
              onSubmit={sendEmail}
                className="php-email-form"
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
