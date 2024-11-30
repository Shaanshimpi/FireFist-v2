import React, { useEffect } from 'react'
import './Motion.css'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// eslint-disable-next-line react/prop-types
function Motion() {

    gsap.registerPlugin(ScrollTrigger);
    const vw = (coef) => window.innerWidth * (coef/100)
    const vh = (coef) => window.innerHeight * (coef/100)
    useGSAP(() => {
        const mm = gsap.matchMedia();


        mm.add("(min-width: 420px)",()=>{
            // div moving down
            gsap.to(`.plus-div`,{
                y: `100vh`,
                ease: "ease",
                duration:5,
                scrollTrigger: {
                    trigger:`.motion`,
                    start: `${vh(50)} 50%`,
                    end: `${vh(120)} 50%`,
                    // markers: true,
                    // pin:true,
                    scrub: 2
                }
            })
    
            // plus scale down
            gsap.to(`.plus-dim`,{
                scale: 0,
                ease: "ease",
                duration:5,
                scrollTrigger: {
                    trigger:`.motion`,
                    start: `${vh(75)} 50%`,
                    end: `${vh(80)} 50%`,
                    // markers: true,
                    scrub: 1
                }
            })

            // // missile scale rotate
            gsap.to(`.missile`,{
                scale:0.5,
                rotate:`180deg`,
                duration: 1,
                ease: "ease",
                scrollTrigger: {
                    trigger:`.motion`,
                    start: `${vh(80)} 50%`,
                    end: `${vh(85)} 50%`,
                    markers: false,
                    scrub: 1
                }
            })

            gsap.fromTo(`.explosion`,{
                height: 0,
                width: 0,
            },{
                height:`99.5vw`,
                width:`99.5vw`,
                duration: 1,
                opacity:1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger:`.motion`,
                    start: `${vh(100)} 50%`,
                    end: `${vh(140)} 50%`,
                    // markers: true,
                    scrub: 1
                }
            })
        })
            // mobile
            mm.add("(max-width: 420px)",()=>{
                gsap.to(`.plus-div`,{
                    y: `80vh`,
                    ease: "ease",
                    duration:5,
                    scrollTrigger: {
                        trigger:`.motion`,
                        start: `${vh(50)} 50%`,
                        end: `${vh(80)} 50%`,
                        // markers: true,
                        // pin:true,
                        scrub: 2
                    }
                })
                
                gsap.to(`.plus-dim`,{
                    scale: 0,
                    ease: "ease",
                    duration:5,
                    scrollTrigger: {
                        trigger:`.motion`,
                        start: `${vh(60)} 50%`,
                        end: `${vh(65)} 50%`,
                        // markers: true,
                        scrub: 1
                    }
                })
                gsap.to(`.missile`,{
                    scale:1,
                    rotate:`180deg`,
                    duration: 1,
                    ease: "ease",
                    scrollTrigger: {
                        trigger:`.motion`,
                        start: `${vh(60)} 50%`,
                        end: `${vh(65)} 50%`,
                        markers: false,
                        scrub: 1
                    }
                })
                gsap.to(`.explosion`,{
                    height:`99.5vw`,
                    width:`99.5vw`,
                    duration: 1,
                    opacity:1,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger:`.motion`,
                        start: `${vh(85)} 50%`,
                        end: `${vh(95)} 50%`,
                        // markers: true,
                        scrub: 4
                    }
                })
                
                gsap.to(`.explosion`,{
                    opacity:0,
                    ease: "power3.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger:`.motion`,
                        start: `${vh(95)} 50%`,
                        end: `${vh(150)} 50%`,
                        // markers: true,
                        scrub: 4
                    }
                })
    
            })

    },{})

  return (
    <div className='motion'>
        <div className="motion-text-div">
            <div className="motion-text-top">
                <h2>MOTION</h2>
            </div>
            <div className="motion-text-bottom">
                <div className="plus-div">
                    <div className="plus-vert plus-dim"></div>
                    <div className="plus-hori plus-dim"></div>
                    <img className="missile" src="./images/missile.svg" alt="" />
                </div>
                <h2>STILLS</h2>
            </div>
        </div>
        <div className="explosion"></div>
    </div>
  )
}

export default Motion