import { JSX, useEffect } from "react";
import "./header.css";
import gsap from "gsap";


function Header(): JSX.Element {
  useEffect(() => {
    gsap.to(".headerC", {
      y: 100,
      ease: "power3.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".headerC",
        start: "top top",
        end: "+=200",
   
      },
    });

  }, []);

  return (
    <div className="headerC">
        <div className="list">
          <div>SH.M</div>
          <ul>
            <li>projects</li>
            <li>
              <a href="#about">
              about me
              </a>
              </li>
          </ul>
        </div>
    </div>
  );
}

export default Header;
