/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
// import  SplitText  from 'gsap-trial/SplitText';
import './Quote.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 

function Quote() {
  const quoteText = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (quoteText.current) {
        const text = quoteText.current.innerHTML;
        if (!text.includes('<span')) {
            quoteText.current.innerHTML = text
                .split('')
                .map(char => `<span class="quote-char">${char}</span>`)
                .join('');
        }
    }
}, []);

    
  useGSAP(() => {
    gsap.from(`.quote-char`, {
      opacity:0.05,
      stagger:{
        each:0.05,
      },
      scrollTrigger: {
        trigger:`.quote`,
        scrub:2,
        start: '30% 80%',
        end: '80% 80%',
        // markers: true,
      },
    })
    gsap.from(`.quote-sub > h5`,{
      y:`100%`,
      duration:1,
      scrollTrigger: {
        trigger:`.quote`,
        scrub:5,
        start: '80% 80%',
        end: '90% 80%',
        // markers: true,
      }
    })

  },{})
     
  return (
    <div className="quote">
      <div className="quote-text" ref={quoteText}>
        When you start a new project, it's essential to choose the right road to move forward.Thankfully, We've been there before, and We know where to turn on a highway.
      </div>
      <div className="quote-sub">
        <h5>Visualize a path where your time and money are not just spent, but invested</h5>
      </div>
    </div>
  )
}

export default Quote
