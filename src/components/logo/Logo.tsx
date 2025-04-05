import { JSX, useEffect } from "react";
import "./logo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Logo(): JSX.Element {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".textShadow",
        start: "top 20%",
        end: "bottom 50%",
        scrub: true,
        pin:true,
        markers:true
      },
    });

    tl.to(".textShadow", {
      textShadow: "3px 3px 0 #ffdac0",
    })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666",
      })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666,9px 9px 0 #e37e32",
      })
      .to(".textShadow", {
        textShadow: "3px 3px 0 #ffdac0,6px 6px 0 #ffa666,9px 9px 0 #e37e32,12px 12px 0 black",
      });
  }, []);

  return (
    <div className="logo">
      <h1 className="textShadow">shlomtzion</h1>
    </div>
  );
}

export default Logo;
