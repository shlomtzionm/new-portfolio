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
  }, []);

  const handleLoad = (spline: any) => {
    const ball = spline.findObjectByName("ball");
    ballRef.current = ball;

    if (!ball || !wrapperRef.current) return;

    // Infinite float animation (up and down)
    gsap.to(ball.position, {
      y: "+=40",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(ball.rotation, {
      z: "+=40",
      y:'+=100',
      x:"+=90",
      duration: 30,
      ease: "circ.inOut",
      repeat: -1,
      yoyo: true,
    });

   
  };

  if (!SplineComponent) return null;

  return (
    
    <div className="ball" ref={wrapperRef}>
      <SplineComponent
        scene="https://prod.spline.design/npQKlW8tGOLepSeL/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}

export default Ball;
