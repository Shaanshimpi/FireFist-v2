import React, { useEffect } from 'react'
import './Footer.css';
import gsap from 'gsap';



function Footer({catArray}) {
    useEffect(()=>{
        const tl = gsap.timeline();
        tl.fromTo('.footer-bg',{
            y:`-45vh`,
            scale:0,
        },{
            scale:1,
            y:`0vh`,
            duration:3,
            ease:`expo.in`,
            scrollTrigger:{
                trigger: '.footer',
                start: 'top+=20% 100%',
                end: 'bottom 100%',
                // markers: true,
                scrub: 2,
            }

        })
        return () => {
            // Clean up scrollTrigger when component re-renders or unmounts
            tl.scrollTrigger?.kill();
        };
    },[catArray])
  return (
    <div className='footer-outer'>
        <div className="footer">
            <div className="footer-sections">
                <div className="footer-col contact">
                    <h6>Contact</h6>
                    <h4><a href="mailto:info@firefist.co.in">info@firefist.co.in</a></h4>
                    <h4><a href="tel:9689760681">+91 968 976 0681</a></h4>
                </div>
                <div className="footer-col question">
                    <h2>Got a Project?</h2>
                    <h2>Want to Collaborate?</h2>
                </div>
                <div className="footer-col address">
                    <h6>Address</h6>
                    <h4>
                        F:8A, Anupama Apt., Ananda Laundry, Pandit Colony, near KTHM college, Gangapur rd., Nashik. 422011
                    </h4>
                </div>
            </div>
            <h1 className="footer-big-text">
                FIREFIST
            </h1>
        </div>
        <div className="footer-bg"></div>
    </div>
    )
}

export default Footer