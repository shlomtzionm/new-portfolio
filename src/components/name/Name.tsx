import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {
  useEffect(() => {

    new SplitType('.nameText',{types:'chars'})
    gsap.timeline({scrollTrigger: {
      trigger: ".name",
      start: "top 5%",
      end: "+=400",
      scrub: 1,
      pin: true,

    }})
    // .to(' .nameText .char',{
    //   ease:'power4.inOut',
    //   rotateX:720,
    //   stagger:.1,
    //   duration:25,
    // })
    
  }, []);
  

  return (
      <div className="name">
        <h1 className="nameText">shlomtzion</h1>
      
      </div>
  );
}

export default Name;
