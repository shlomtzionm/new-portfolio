import { JSX, useEffect, useRef } from "react";
import "./footer.css";
import gsap from "gsap";

function Footer(): JSX.Element {
  const skills = [
    "react",
    "angular",
    "mySQL",
    "mongoDB",
    "typeScript",
    "restAPI",
    "Socket.io",
    "OAuth",
    "Docker",
    "AWS",
    "Mocha",
    "chai",
    "node.js",
    "mui",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const totalWidth = scroller.offsetWidth / 2;

    gsap.to(scroller, {
      x: -totalWidth,
      duration: 10,
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // loop seamlessly
      },
    });
  }, []);

  return (
    <div className="footer" ref={containerRef}>
      <div className="skillContainer" ref={scrollerRef}>
        {[...skills, ...skills].map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Footer;
