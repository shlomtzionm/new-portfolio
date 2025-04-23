import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".headerC", {
      y: -100,
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: ".headerC",
        start: "top top",
        scrub: 1,
      },
    })
  }, []);

  return (
    <div className="headerC">
      <div className="list">
        <div>SH.M</div>
        <ul>
          <li>projects</li>
          <li>
            <a href="#about">about me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
