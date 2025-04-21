import { JSX, useEffect } from "react";
import "./name.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Name(): JSX.Element {

  useEffect(() => {
    // Set up the ScrollTrigger directly without a timeline
gsap.timeline({
  scrollTrigger:{
    trigger: '.nameText',
    start: "top-=150 top", // Start pinning when the top of the trigger is 50px above the top of the viewport
    end: "+=155", // Pin for 55 pixels
    pin: true, // Pin the element during the scroll
    markers: true // Show markers for debugging

  }
        });
  }, []);

  return (
    <div className="name">
      <h1 className="nameText">shlomtzion</h1>
    </div>
  );
}

export default Name;