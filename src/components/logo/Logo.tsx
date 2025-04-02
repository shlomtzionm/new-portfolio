import { JSX } from "react";
import "../logo/logo.css";

function Logo(): JSX.Element {

  return (
    <div className="logo">
      {/* <h1 id="name">
        shlo<span>m</span>tzion
      </h1> */}
      <h1 id="name">
        <span>s</span>
        <span>h</span>
        <span>l</span>
        <span>o</span>
        <span>m</span>
        <span>t</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
      </h1>
    </div>
  );
}

export default Logo;
