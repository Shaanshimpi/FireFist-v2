import React, { useEffect } from 'react';
import './Onwards.css';
import MovingSlidesVid from './Onwards.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// eslint-disable-next-line react/prop-types
function Onwards({ catArray }) {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.onwards-sec',
                start: '20vh 80%',
                end: 'top 80%',
                // markers: true,
                toggleActions: `play none none reverse`
            }
        });

        tl.fromTo('.onwards', 
            {
                backgroundColor: '#efece7',
                color: `#000`
             }, 
            {
                backgroundColor: '#000',
                color: '#fff',
                duration: 0.4,
                ease: 'power2.inOut',
            }
        );

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.onwards-opacity-anim',
                start: 'top 80%',
                end: 'bottom 80%',
                // markers: true,
                scrub: 1,

            }
        })
        tl2.fromTo('.onwards-opacity-anim',{
            opacity: 0,
            scale: 0.8,
            ease: 'power4.inOut',
            
        },{
            opacity: 1,
            scale: 1,
        })

        return () => {
            // Clean up scrollTrigger when component re-renders or unmounts
            tl.scrollTrigger?.kill();
            tl2.scrollTrigger?.kill();
        };
    }, [catArray]);

    return (
        <div className="onwards">
            <div className="onwards-text">
                <h3 className="onwards-quote onwards-opacity-anim">
                    The most exciting high-growth brands
                    put uniqueness at their core. 
                    <i>
                        The data shows it. And we’ve seen it.
                    </i>
                </h3>
                <div className="onwards-sec">
                    <h3 className="onwards-sec-quote onwards-opacity-anim">
                        Today’s leading brands know that looking good isn’t enough—they need to stand out with purpose. Unique, user-centered design not only captures attention but builds lasting connections.
                    </h3>
                    <h3 className="onwards-sec-quote onwards-sec-quote-2 onwards-opacity-anim">
                        Our approach combines creativity and functionality, crafting websites that reflect your brand’s individuality and engage visitors from the first click.
                    </h3>
                </div>

            </div>
            <div className="slide-videos">
                <h2 className="slide-text">
                    At <strong>FireFist</strong>, we believe minimalism is the
                    winning strategy. We help you tune in to
                    yours—and transform your organization
                    for ultimate impact.
                </h2>
                 
                <video playsInline={true} autoPlay muted loop>
                    <source src={MovingSlidesVid} type="video/mp4" />

                </video>
            </div>
        </div>
    );
}

export default Onwards;
