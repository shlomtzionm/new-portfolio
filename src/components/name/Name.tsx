import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import About from "../about/About";

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {
  useEffect(() => {

    new SplitType('.nameText',{types:'chars'})
    gsap.timeline({scrollTrigger: {
      trigger: ".name",
      start: "top-=170 top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      pinSpacing:true

    }})
  }, []);
  

  return (
      <div className="name">
        <h1 className="nameText">shlomtzion</h1>
        
      </div>
  );
}

export default Name;
