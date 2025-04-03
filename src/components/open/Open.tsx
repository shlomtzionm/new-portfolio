import { JSX, useEffect, useRef } from "react";
import "../open/open.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Open(): JSX.Element {
  const elements = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    console.log(elements.current);

    const tl = gsap.timeline({
      defaults: { duration: 0.2, ease: "back.inOut" },
    });

    tl.to(elements.current[0], { opacity: 1, scale: 0.5, x: 190, y: -200 })
      .to(elements.current[1], { opacity: 1, scale: 1, x: 90, y: -40 })
      .to(elements.current[2], { opacity: 1, scale: 1.5, x: -300, y: 10 })
      .to(elements.current[3], { opacity: 1, scale: 1.3, x: -290, y: -340 })
      .to(elements.current[4], { opacity: 1, scale: 1.2, x: 200, y: -300 })
      .to(elements.current[5], { opacity: 1, scale: 1.7, x: -130, y: 170 })
      .to(elements.current[6], { opacity: 1, scale: 0.6, x: -50, y: -170 })
      .to(elements.current[7], { opacity: 1, scale: 0.8, x: -210, y: -40 })
      .to(elements.current[8], { opacity: 1, scale: 0.4, x: -360, y: 100 })
      .to(elements.current[9], { opacity: 1, scale: 0.5, x: -300, y: -270 })
      .to(elements.current[10], { opacity: 1, scale: 1.1, x: 200, y: 200 })
      .to(elements.current[11], { opacity: 1, scale: 0.6, x: -190, y: -240 })
      .to(elements.current[12], { opacity: 1, scale: 1, x: -270, y: -185 })
      .to(elements.current[13], { opacity: 1, scale: 1.4, x: 220, y: 100 })
      .to(elements.current[14], { opacity: 1, scale: 0.5, x: 230, y: -95 })
      

    
    tl.to(elements.current, {
      scale: 10,
      x: 1000,
      opacity: 0.2,
      duration: 10,
      ease: "power2.in",
      transformOrigin: "center",
      scrollTrigger: {
        trigger: ".open", // The container div
        start: " top 0%",
        end: "top 20%",
        markers:true,
        toggleActions: "play pause reverse reset", 
        scrub: 1, // Smooth transition
        onEnter:()=>console.log("entered"),
        onLeave:()=>console.log("Left")
        
        
      },
    });
  }, []);

  return (
    <div className="open">
      {[
        "develop", "design", "react", "angular", "mySQL", "mongoDB",
        "typeScript", "restAPI", "Socket.io", "OAuth", "Docker",
        "AWS", "Mocha", "chai", "node.js",
      ].map((skill, index) => (
        <span
          key={skill}
          className="skill"
          ref={(el) => {
            if (el) elements.current[index] = el;
          }}
          id={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Open;
