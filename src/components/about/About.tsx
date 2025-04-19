import { JSX } from "react";
import "./about.css";
import gsap from "gsap";

function About(): JSX.Element {
    const tl = gsap.timeline()
  tl.to(".about",{
    y:-100,
    ease:"power2.inOut",
    scrollTrigger:{
        trigger:'.about',
        start:"top 60%",
        end:'+=200'
    }
  })
    return (
    <div className="about">
      <p>
        Yes, my name is Shlomtzion (shocking right :)) and im a fullstack developer. I graduated from John Bryce academy and always learning new tech. My coding method is: "Develop with passion, debug
        with patience, live with balance”
      </p>
    </div>
  );
}

export default About;
