import React from 'react'
import './RightScroller.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import starbucks from './starbucks.jpg'
import rado from './rado.jpg'
import lambo from './lambo.jpg'
import marl from './marl.jpg'
import mac from './mac.jpg'
import bmw from './bmw.jpg'
import jbl from './jbl.jpg'

function RightScroller() {
    const vh=x=>window.innerHeight/100*x;
    const vw=x=>window.innerWidth/100*x;
    const mm = gsap.matchMedia();
    const rightScrollerWidth = vw(170)+vh(140)
    useGSAP(()=>{
        mm.add(`(min-width:768px) `,()=>{
            gsap.to(`.right-scroller-container`,{
                x:`-240vw`,
                duration:2,
                ease:"linear",
                scrollTrigger:{
                    trigger:`.right-scroller`,
                    start:`top 0%`,
                    end:`${vh(700)} 100%`,
                    scrub:true,
                    pin:true,
                    // markers:true,
                }
            })
             gsap.to(`.right-scroller`,{
                color:`#fff`,
                background:`#000`,
                ease:`power3.inOut`,
                scrollTrigger:{
                    trigger:`.scroll-div-3`,
                    start:`${vh(300)} 0%`,
                    end:`${vh(300)} 0%`,
                    // markers: true,
                    scrub:3,
                }
             })

        })
        // tab
        mm.add(`(max-width:768px) and (min-width:420px) `,()=>{
            gsap.to(`.right-scroller-container`,{
                x:`-290vw`,
                duration:2,
                ease:"linear",
                scrollTrigger:{
                    trigger:`.right-scroller`,
                    start:`top 0%`,
                    end:`${vh(700)} 100%`,
                    scrub:true,
                    pin:true,
                    // markers:true,
                }
            })
             gsap.to(`.right-scroller`,{
                color:`#fff`,
                background:`#000`,
                ease:`power3.inOut`,
                scrollTrigger:{
                    trigger:`.scroll-div-3`,
                    start:`${vh(200)} 0%`,
                    end:`${vh(200)} 0%`,
                    // markers: true,
                    scrub:3,
                }
             })

        })
        // mob
        mm.add(`(max-width:420px) `,()=>{
            gsap.to(`.right-scroller-container`,{
                x:`${-rightScrollerWidth}`,
                duration:2,
                ease:"linear",
                scrollTrigger:{
                    trigger:`.right-scroller`,
                    start:`top 0%`,
                    end:`${vh(700)} 100%`,
                    scrub:true,
                    pin:true,
                    // markers:true,
                }
            })
             gsap.to(`.right-scroller`,{
                color:`#fff`,
                background:`#000`,
                ease:`power3.inOut`,
                scrollTrigger:{
                    trigger:`.scroll-div-3`,
                    start:`${vh(200)} 0%`,
                    end:`${vh(200)} 0%`,
                    // markers: true,
                    scrub:3,
                }
             })
             gsap.to(`.scroll-2-btm > h3`,{
                right:0,
                scrollTrigger:{
                    trigger:`.scroll-div-2`,
                    start:`bottom+=${vh(120)} 0%`,
                    end:`bottom+=${vh(400)} 0%`,
                    scrub:true,
                    // markers:true,
                }
             })

        })
    },{})
     return (
        <div className="right-scroller">
            <div className="right-scroller-container">
                <div className="scroll-div-1">
                    <div className="scroll-1-left">
                        <div className="scroll-1-top">
                            <div className="scroll-1-title">
                                Your Brand, <br />Amplified.
                            </div>
                        </div>
                        <div className="scroll-1-bottom">
                            <img src={rado} alt="" />
                            <p>
                                Transforming your ideas into a powerful brand that connects, inspires, and drives success.
                            </p>
                        </div>
                    </div>
                    <div className="scroll-1-img">
                        <img src={starbucks} alt="" />
                    </div>
                </div>
                <div className="scroll-div-2">
                    <div className="scroll-2-top">
                        <img src={lambo} alt="" className="hr" />
                        <img src={mac} alt="" className="vr" />
                        <img src={marl} alt="" className="hr" />
                    </div>
                    <div className="scroll-2-btm">
                        <h3>
                        "A powerful brand <br />inspires trust,
                         ignites loyalty,<br /> and 
                         transforms businesses <br />
                         into leaders."

                        </h3>
                    </div>
                </div>
                <div className="scroll-div-3">
                    <div className="scroll-3-left">
                        <img src={jbl} alt="" />
                    
                    </div>
                    <div className="scroll-3-right">
                        <div className="scroll-3-right-top">
                            <img src={bmw} alt="" />
                        </div>
                        <div className="scroll-3-right-btm">
                            <p>
                                A bold brand commands attention.
                                It inspires trust and loyalty.
                                It turns ideas into movements.
                                And sets businesses apart to lead.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RightScroller