import { JSX, useEffect } from "react";
import "./projects.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imgGen from "../../assets/images/imageGenarator.png";
import imgFinanc from "../../assets/images/financal.png";

gsap.registerPlugin(ScrollTrigger);

function Projects(): JSX.Element {
  const projects = [
    {
      img: imgFinanc,
      text: "A full-featured financial dashboard built with modern tools...",
      name: "Financial Dashboard",
    },
    {
      img: imgGen,
      text: "An AI-powered image generator that turns text prompts into visuals...",
      name: "AI Image Generator",
    },
    {
      img: imgFinanc,
      text: "A full-featured financial dashboard built with modern tools...",
      name: "Financial Dashboard",
    },
    {
      img: imgGen,
      text: "An AI-powered image generator that turns text prompts into visuals...",
      name: "AI Image Generator",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="projectsC">
      <div className="headers">
        <h4 className="h4Header">some of my</h4>
        <h1 className="h1Header">projects</h1>
      </div>
      <div className="projectsGrid">
  {projects.map((p, i) => (
    <div className="project-item" key={i}>
      <div className="grid-number">
<p>
[0{i + 1}]
  </p>     
        <h3>{p.name}</h3>
      </div>
      <div className="grid-image">
        <img src={p.img} alt={`Project ${i + 1}`} />
      </div>
      <div className="grid-text">
        <p>{p.text}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Projects;
