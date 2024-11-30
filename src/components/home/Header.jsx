import { useState, useEffect } from 'react';
import React from 'react';
import './Header.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
function Header() {
  const vh = (x)=> window.innerHeight*x/100;
  useGSAP(() =>{

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // document.querySelector('.head-anim-text')['opacity'] = 1;

    gsap.fromTo(`.head-anim-text`,{
      opacity:0,
      scaleY:0,
    },{
      stagger:0.5,
      opacity:1,
      scaleY:1,
      duration:0.4,
      delay:.1,
      scrollTrigger:{
        trigger:`.head-anim-text`,
        start: "top 50%",
        end: "top 50%",
        // markers: true,
        scrub:2
      }
    })
    mm.add("(min-width: 420px)",()=>{
      gsap.to(`.header-inner`,{
        padding: "0 20vw",
        duration:1,
        ease:'ease',
        scrollTrigger:{
          trigger:`.header-full`,
          start: "60% 75%",
          end: "150% 75%",
          // markers: true,
          scrub:1
        }
      })

    })

    gsap.fromTo(`.head-title`,{
      // opacity:0,
      y:`50vh`,
    },{
      y:0,
      duration:3,
      ease:'power4.out',
      scrollTrigger:{
        trigger:`.header`,
        start: `top 50%`,
        end: "top 100%",
        // markers: true,
        // scrub:1
      }

    })
     
    return () => {
      // Clean up scrollTrigger when component re-renders or unmounts
      gsap.scrollTrigger?.kill();
  };
  },{})
  const [flick, setFlick] = useState([
    `It's not about how good are, It's about how much better you can become`,
    'So how good do you really want to be?'
  ]);
  
  return (
    <div className="header" id="header">
      <div className="header-inner">
        <div className="header-full">

          <div className="header-sec-text">
            

            <div className="occupation head-element">
              <p className="occupation-subtitle">
                Specialized in Design & Development
              </p>
              <h3 className="occupation-title">Development Agency</h3>
            </div>
            <div className="location head-element">
              <p className="location-subtitle">
              Contact us
              </p>
              <h3 className="location-title"><a href="tel:9689760681">+91 968 976 0681</a></h3>
              
            </div>
          </div>
          <div className="header-mid-text">
            <div className="header-smalltext">
              <h4 className='head-anim-text'>
                Navigating your digital transformation through creative solutions providing a personal touch.
              </h4>
              <br />
              <br />
              <p className='head-anim-text'>
                <strong>Helping with:</strong>
                <br />
                  Creative Ideas / Rebranding
                  <br />
                  Brand Marketing Designs
                  <br />
                  UI/UX Design
                  <br />
                  Web Development
              </p>
            </div>
            <h2 className="subtitle head-anim-text">
              Only.<br/>
              From Me To You. <br />
              Always Responsive.
            </h2>
          </div>

          <div className="head-title">
            <span className="header-fire">FIRE</span><span className="header-fist">FIST</span>
          </div>
        </div>

        {/* absolute bottom left */}

        <div className="bottom-left">
          <div className="flicker">
            <div>
                {flick.map((e, i)=>{
                    return (<div className="flick" key={i}>
                       {e}
                    </div>)
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
