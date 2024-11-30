// Pinned.jsx - Component stays the same
import React, { useEffect, useRef } from 'react'
import './Pinned.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Pinned() {
    const pinnedPara = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    useGSAP(() => {
        // Split text into spans
        const text = pinnedPara.current.innerHTML;
        if(text.indexOf("<span") === -1) {
            pinnedPara.current.innerHTML = '<span>' + 
                text.split(" ").join('</span> <span class="pin-char">') + 
                '</span>';
        }
        
        // Replace the divider with a div
        pinnedPara.current.innerHTML = pinnedPara.current.innerHTML.replace(
            '<span class="pin-char">|</span>', 
            '<div style="width:100%"></div>'
        )

        // Widening div animation
        gsap.from('.widening-div', {
            width: 0,
            scrollTrigger: {
                trigger: '.pinned',
                start: "top top",
                end: "bottom bottom",
                pin: '.pinned-div',
                scrub: 1,
            }
        })

        // Characters display animation
        gsap.fromTo('.pin-char', 
            {
                display: 'none',
            },
            {
                display: 'block',
                stagger: 1,
                scrollTrigger: {
                    trigger: '.pinned',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,     
                    pin: false,
                    // markers: true    
                }
            }
        )
        mm.add("(min-width:420px)",()=>{
            gsap.to(`.widening-div`,{
                scale:1.1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.pinned',
                    start: "60% top",
                    end: "90% 50%",
                    pin: false,
                    scrub: 1,
                    // markers:true,
                }
            })

        })
        mm.add("(max-width:420px)",()=>{
            gsap.to(`.widening-div`,{
                scale:3,
                duration: 1,
                scrollTrigger: {
                    trigger: '.pinned',
                    start: "50% top",
                    end: "80% 50%",
                    pin: false,
                    scrub: 1,
                    // markers:true,
                }
            })

        })
    }, [])

    return (
        <div className='pinned'>
            <div className="pinned-div">
                <div className="widening-div"></div>
                <p className="pinned-para" ref={pinnedPara}>
                    next, take a look at some Designs by | firefist that stand out
                </p>
            </div>
        </div>
    )
}

export default Pinned