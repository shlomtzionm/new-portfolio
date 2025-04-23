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
      text: "123123123213",
      name: "something",
    },
    {
      img: imgGen,
      text: "I’m particularly passionate about this project because it allowed me to create something entirely new...",
      name: "AI image generator",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="projectsC">
      <div className="headers">
        <h4 className="h4Header">some of my</h4>
        <h1 className="h1Header">projects</h1>
      </div>
      <div className="content">
        {projects.map((p, i) => (
          <div className="item">
            <div className="itemHeader">
        <p>
        [{i + 1}]
          </p>
          <div>
          {p.name}
          </div>
            </div>

            <img src={p.img}></img>
            <p className="itemText">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
