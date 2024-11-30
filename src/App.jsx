import Header from './components/home/Header'
import Quote from './components/home/Quote'
import Why from './components/home/Why'
import Loading from './components/home/Loading';
import Motion from './components/home/motion';
import VideoSection from './components/home/VideoSection';
import Designs from './components/home/Designs';
import Onwards from './components/home/Onwards';

import React, { useState, useEffect, useRef } from 'react';

import './App.css'

import gsap from 'gsap';
import Footer from './components/home/Footer';
import Lenis from 'lenis';
import Pinned from './components/home/Pinned';
import RightScroller from './components/home/RightScroller';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const [catArray, setCatArray] = useState([])
  const [loading, setLoading] = useState(true);

  const handleMouseMove = (e) => {
    const x = (e.clientX);
    const y = (e.clientY);

    const tl = gsap.timeline()
    tl.to(".cursor-diff",{
      x,
      y,
      scale:3,
      ease:"ease",
      duration:0.5,
    })
    tl.to(".cursor-diff",{
      scale:1,
      // x:x-5,
      // y:y-5,
      ease:"ease",
      duration:0.5,
    })
  }

  

  return (
    <div className='whole-page' onMouseMove={handleMouseMove}>
      <div className="cursor-diff"></div>

      {/* <Loading loading={loading}/> */}
      <VideoSection />
      <Header />
      <Why />
      <Motion/>
      <Quote />
      <RightScroller />
      <Pinned/>
      <Designs catArray={catArray} setCatArray={setCatArray} setLoading={setLoading} loading={loading}/>
      <Onwards catArray={catArray}/>
      <Footer catArray={catArray}/>     
    </div>
  )
}

export default App
