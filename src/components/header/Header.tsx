import { JSX, useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";


function Header(): JSX.Element {
  useEffect(() => {
    gsap.to(".headerC", {
      y: -100,
      ease: "power3.inOut",
      duration: 5,
      scrollTrigger: {
        trigger: ".headerC",
        scrub: 2,
        start: "top 8%",
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
