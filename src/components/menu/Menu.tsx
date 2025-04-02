import { JSX } from "react";
import "../menu/menu.css";
function Menu(): JSX.Element {
  return (
    <div className="menu">
      <ul>
        <li>
          <i className="fa-solid fa-heart fa-2xl"></i>
          <p>0000</p>
        </li>
        <li>
          <i className="fa-solid fa-comment fa-2xl"></i>
          <p>0000</p>
        </li>

        <li>
          <i className="fa-solid fa-share fa-2xl"></i>
          <p>0000</p>
        </li>

        <li>
          <i className="fa-solid fa-bookmark fa-2xl"></i>
          <p>0000</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
