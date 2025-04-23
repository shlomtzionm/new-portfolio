import { JSX, useEffect } from "react";
import "./about.css";
import me from "../../assets/images/me.jpg"
function About(): JSX.Element {
   
  
    return (
    <div className="about">
      <p className="text">
        Yes, my name is Shlomtzion (shocking right :)) and im a fullstack developer. I graduated from John Bryce academy and always learning new tech. My coding method is: "Develop with passion, debug
        with patience, live with balance”
      </p>
      <img className="img" src={me}></img>
    </div>
  );
}

export default About;
