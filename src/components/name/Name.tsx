import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {
useEffect(() => {
  const tl =gsap.timeline()
  tl.to('.name',{
    y:200,
    ease:'power4.inOut',
    duration:5,
    scrollTrigger:{
      trigger:".name",
      start:'top top',
     end:"bottom bottom",
      scrub:true,
      
    }
  })
}, []);
  
  return (
    <div className="name">
      <h1 className="nameText">shlomtzion</h1>
    </div>
  );
}

export default Name;
