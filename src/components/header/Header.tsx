import { JSX, useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";


function Header(): JSX.Element {
  const [isMobile, SetIsMobile] = useState(checkSize);

  function checkSize() {
    return window.innerWidth < 700;
  }

  useEffect(() => {
    function handleResize() {
      SetIsMobile(checkSize);
    }

    window.addEventListener("resize", handleResize);

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="headerC">
      {isMobile ? (
        <FontAwesomeIcon icon={faBars} className="bars" />
      ) : (
        <div className="list">
          <div>shlomtzion</div>
          <ul>
            <li>projects</li>
            <li>about me</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
