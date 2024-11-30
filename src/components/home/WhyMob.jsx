import React,{useState, useRef, useEffect} from 'react'
import './WhyMob.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin( ScrollTrigger);
function WhyMob() {
    const [titles, setTitles] = useState([
        `Custom Website Design`,
        `E-commerce Solutions`,
        `Web Application Development`,
        `Mobile App Development`
    ])
    const [image, setImage] = useState(`../images/legendary.webp`)
    const imageList = [`legendary.webp`, `bar.webp`, `genk.webp`,`phone.webp`]
  
    useEffect(()=>{
      const boxes = gsap.utils.toArray('.whyMobSection');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: `-300vw`,
          background:`black`,
          color:`white`,
          scrollTrigger: {
            trigger: box,
            scrub:4,
            start: 'top top',
            end: 'bottom 70%',
            markers: false,
            pin: true
          }
        });
      });
      
      return () => {
        gsap.killTweensOf(boxes);
      }
    },[])
  return (
    <>
    <div className="why-mob">
      {
        titles.map((title, i) => (
          <div className="whyMobSection" key={i} id={`whyMobSection-${i}`}>
            <h3>{title}</h3>
            <img src={`../images/${imageList[i]}`} alt="" />
          </div>
        ))
      }
    </div>

    </>
  )
}

export default WhyMob