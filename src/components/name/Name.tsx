import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


  }, []);

  return (
    <div className="name">
      <h1 className="textShadow">shlomtzion</h1>
    </div>
  );
}

export default Name;
