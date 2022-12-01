import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Team from './components/Team'
import Speakers from './components/Speakers'
import About from './components/About'
import Footer from './components/Footer'
import Register from './components/Register'
import video from './assets/TEDxvideo.mp4'




const App = () => {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => setSpinner(false), 9000)
  }, []);


  return (
    <>
      {spinner ? (
        <div className="video-container">
          <video loop muted autoPlay  width="100%" id="autovideo" >
            <source  src={video} type="video/mp4"/>
          </video>
        </div>
            ) : (
            <div>
              <Navbar />
              <main id="main">
                <Register />
                <About />
                <Speakers />
                <Team />
                <Contact />
              </main>
              <Footer />
            </div>
            )
      }
          </>
          )
}

          export default App