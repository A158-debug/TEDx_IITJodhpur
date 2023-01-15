/* eslint-disable import/first */
import React, { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Events from './components/Event/Events'
import video from './assets/TEDxvideo.mp4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const About = lazy(() => import('./components/About'));
const Team = lazy(() => import('./components/Team'));
const Speakers = lazy(() => import('./components/Speakers'));

const Loader = () => {
  <>
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </>
}

const App = () => {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => setSpinner(false), 3500)
  }, []);


  return (
    <>
      {/* {spinner ? (
        <>
          <video loop muted autoPlay  id="autovideo" >
            <source src={video} type="video/mp4" />
          </video>
        </>
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <main id="main">
              <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/events" element={<Events />} />
              </Routes>
              </Suspense>
            </main>
            <Footer />
          </BrowserRouter>
        </>
      )
      } */}
      <BrowserRouter>
        <Navbar />
        <main id="main">
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App