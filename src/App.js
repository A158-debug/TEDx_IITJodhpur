import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Team from './components/Team'
import Speakers from './components/Speakers'
import About from './components/About'
import Footer from './components/Footer'
import Register from './components/Register'
import Home from './components/Home'
import video from './assets/TEDxvideo.mp4'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => setSpinner(false), 3000)
  }, []);


  return (
    <>
      {/* {spinner ? (
        <>
          <video loop muted autoPlay  width="100%" id="autovideo" >
            <source  src={video} type="video/mp4"/>
          </video>
        </>
            ) : (
            <>
              <Navbar />
              <main id="main">
                <Register />
                <About />
                <Speakers />
                <Team />
                <Contact />
              </main>
              <Footer />
            </>
            )
      } */}
      <BrowserRouter>
        <Navbar/>
        <main id="main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Team />} />
            <Route path="/gallery" element={<Team />} />
            <Route path="/speakers" element={<Speakers />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App