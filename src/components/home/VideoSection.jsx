import React, {useEffect, useRef} from 'react'
import './VideoSection.css'
// import Video from './VideoSection.mp4';
import Video from './moving-slides.mp4';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function VideoSection() {
    const videoRef = useRef(undefined);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true; // Ensure muted
            videoRef.current.setAttribute('playsInline', 'true'); // Force inline playback
        }
    }, []);
    useGSAP(()=>{
        // gsap.to(`.vid-sec-text .overlay`,{
        //     height: 0,
        //     duration:1,
        //     delay:0.1,
        //     ease: 'power1.inOut',
        //     scrollTrigger:{
        //         trigger:`.video-section`,
        //         start: '3% 0%',
        //         end: 'bottom 80%',
        //         // markers: true
                
        //     }
        // })

        gsap.to(`.vid-sec-text h2`,{
            // bottom:0,
            y:`-20vh`,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:`.vid-sec-text`,
                start: 'bottom 70%',
                end: 'bottom 0%',
                // markers: true,
                scrub: true,
            }
        })


    },{})
    return (
        <div className="video-section">
            <div className="vid-sec-text">
                <div className="overlay"></div>
                <h2>
                    <span className='bold'>Bold</span> Brands,
                    <br />
                    Iconic <span className='looks'>Looks.</span>
                </h2>
            </div>
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                ref={videoRef}
            >
                <source src={Video} type="video/mp4" />
            </video>
            
        </div>
    )
}

export default VideoSection