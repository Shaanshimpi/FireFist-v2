import React, { useRef, useState, useEffect } from "react";
import './Loading.css'

import gsap from "gsap";
// load 'scrambling-text' module.
// import Scrambler from "./Scrambler";

// eslint-disable-next-line react/prop-types
export default function Loading({loading}) {
  // define the text to be scrambled as state.
  const [text, setText] = useState(``);
  const [loadingAnimationFinished, setLoadingAnimationFinished] = useState(false);
    const [textArray, setTextArray] = useState([
      "FIREFIST",
      "DESIGNS",
      "Art in Every Click",
  ]);
  useEffect(() => {
    // call scramble function with the text to be scrambled and handler.
      if(!loading && loadingAnimationFinished){
          gsap.to('.loading',{
              height: 0,
              opacity:0,
              duration: 1,
              ease: "power3.inOut",
          })
      }
        
  }, [loading, loadingAnimationFinished]);
      

  useEffect(()=>{
    textArray.forEach((ele,i)=>{
      setTimeout(()=>{
        loadScramble(ele)
      },i*2500)
    });
    setTimeout(()=>{
      setLoadingAnimationFinished(true)
    },7000);
    function loadScramble(txt) {
      const interval=setInterval(() => {
          setText(randomSymbols(txt.length))
      }, 50);
      setTimeout(() => {
        clearInterval(interval);
        setText(txt)
      },1500)
    }
  },[])
  
  function randomSymbols(length) {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    }

    return result;
}
  return <>
    <div className="loading">
      <h1>
        {text}
      </h1>
    </div>
  </>;
}