import React, {useState} from 'react'
import './Why.css'
function Why() {
    const [cursorStyle, setCursorStyle] = useState({})
    const [image, setImage] = useState(`../images/legendary.webp`)
    const [titles, setTitles] = useState([
        `Custom Website Design`,
        `E-commerce Solutions`,
        `Web Application Development`,
        `Mobile App Development`
    ])

    const handleMouseMove=(event)=> {
        const deg = ((event.clientX - (screen.width/2))/ (screen.width/2))*35;
        
            setCursorStyle({

                transform: `translate(${Math.min(event.clientX,screen.width)+20}px,${event.clientY+50}px) rotate(${deg}deg)`,
                // transitionDuration: `20ms`,
                transition:'0.1s transform  ease'
            })
        
    }
    const handleMouseLeave = (event) => {
        document.getElementById('cursor-follow').style.transform = 'translate(0,0)';
        document.querySelector(".cursor-diff").style.display = "block";
    }

    const handleMouseEnter = (event) => {
        const imageList = [`legendary.webp`, `bar.webp`, `genk.webp`,`phone.webp`]
        const eleId = event.target.id.replace("why-sec-","");
        eleId && setImage(`../images/${imageList[parseInt(eleId)]}`)
        document.querySelector(".cursor-diff").style.display = "none";
        
        
    }
    
  return (
    <div className='why' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <h5 className="why-title">We're here for you if need</h5>
      <div className="why-section-container">
        {titles.map((e,i)=>{
            return <div className="why-section" key={i} id={`why-sec-`+i} onMouseEnter={handleMouseEnter}>
                <h3>{e}</h3>  
            </div>
        })}
      </div>
      <div className="cursor-follow" style={cursorStyle} id='cursor-follow'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Why
