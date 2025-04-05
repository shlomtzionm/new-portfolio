import { JSX, useEffect, useState } from "react";
import "./open.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function Open(): JSX.Element {
  const skills = [
   "react", "angular", "mySQL", "mongoDB", "typeScript", "restAPI", 
    "Socket.io", "OAuth", "Docker", "AWS", "Mocha", "chai", "node.js", "angular", 
    "mySQL", "mongoDB", "typeScript", "restAPI", "Socket.io", "OAuth", "Docker", 
    "AWS", "Mocha", "chai", "node.js","mui"
  ];

 

  useEffect(() => {

    const splitText = new SplitType(".skillContainer", { types: "chars" });

    const tl = gsap.timeline();

  
    tl.to(".char", {      
      fontSize: 60,      
      stagger: 1000,   
      duration: 1000, 
      lineHeight:'4.5rem'  , 
      scrollTrigger: {
        trigger: '.skillContainer',   
        start: 'top 60%',              
        end: 'bottom 40%',           
        scrub: true}              
    
    }
    )
  

  
    return () => {
      splitText.revert(); 
    };
  }, []);

  return (
    <div >
      <p className="skillContainer">
        {skills.join(" ")} 
   
  
      </p>
    </div>
  );
}

export default Open;
