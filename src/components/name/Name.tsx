import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {
  useEffect(() => {
    new SplitType(".nameText", { types: "chars" });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".name",
        start: "top-=100 top",
        end: "+=70",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);

  return (
    <div className="name">
      <h1 className="nameText">shlomtzion</h1>
    </div>
  );
}

export default Name;
