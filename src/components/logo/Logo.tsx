import { JSX, useEffect } from "react";
import "./logo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Logo(): JSX.Element {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".textShadow",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true
      }
    });


    tl.to(".textShadow", {
      textShadow: "3px 3px 0 #ffdac0",
      duration: 0.5,
    })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666",
        duration: 0.5,
      })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666,9px 9px 0 #e37e32",
        duration: 0.5,
      })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666,9px 9px 0 #e37e32,12px 12px 0 #b56900",
        duration: 0.5,
      });
  }, []);

  return (
    <div className="logo">
      <h1 className="textShadow">shlomtzion</h1>
    </div>
  );
}

export default Logo;
