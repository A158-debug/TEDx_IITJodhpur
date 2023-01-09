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
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>CONTACT</h2>
            <p>
             We would love to respond to your queries and help you succeed. Feel free to get in touch with us
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3 class="text-white">Our Address</h3>
                    <p>NH 62, Surpura Bypass Road, Karwar,Rajasthan 342030</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3  class="text-white">Email Us</h3>
                    <p>
                      tedx@iitj.ac.in
                      <br />
                     choudhary.21@iitj.ac.in
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3  class="text-white">Call Us</h3>
                    <p>
                      +91 9805397585 
                      {/* <br/>
                      Kartik : Organizer */}
                      </p>
                    <p>
                      +91 9529107219   
                      {/* <br />
                     shivangi : Curator */}
                     </p>
                  </div>
                </div>
              </div>
            </div>
 
            <div class="col-lg-6">
              <form
              onSubmit={sendEmail}
                class="php-email-form"
              >
                <div class="row">
                  <div class="col form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
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
