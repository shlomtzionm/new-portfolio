import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./ball.css";
import ScrollTrigger from "gsap/ScrollTrigger";

function Ball() {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const ballRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
 
 
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    import("@splinetool/react-spline").then((mod) => {
      setSplineComponent(() => mod.default);
    });
  
    if (wrapperRef.current) {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: "power1.inOut",
        },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "+=2000",
          scrub: true,
          markers: true,
        },
      });
  
      tl.to(wrapperRef.current, { x: 100, y: 0 })
        .to(wrapperRef.current, { x: 200, y: -100 })
        .to(wrapperRef.current, { x: 0, y: -200 })
        .to(wrapperRef.current, { x: -200, y: -100 })
        .to(wrapperRef.current, { x: -500, y: 10 });
    }
  }, []);
  
  

  const startRotation = (speed: number) => {
    const ball = ballRef.current;
    if (!ball) return;

    // Continuous rotation animation
    gsap.to(ball.rotation, {
      y: "+=6.28319", // 360° rotation
      duration: speed,
      ease: "none",
      repeat: -1, // Repeat indefinitely
    });
  };

  const handleLoad = (spline: any) => {
    const ball = spline.findObjectByName("ball");
    ballRef.current = ball;

    if (ball) {
      startRotation(4); // Slow default rotation speed
      gsap.to(ball.position, {
        y: "+=40", // Up and down movement
        duration: 1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  };

  const handleMouseEnter = () => {
    startRotation(1.5); // Faster rotation when hovered
  };

  const handleMouseLeave = () => {
    startRotation(4); // Slow rotation when hover ends
  };

  if (!SplineComponent) return null;

  return (
    <div
      className="ball"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SplineComponent
        scene="https://prod.spline.design/npQKlW8tGOLepSeL/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
  
}

export default Ball;
