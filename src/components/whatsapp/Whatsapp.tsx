import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./whatsapp.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';


function Whatsapp() {
  gsap.registerPlugin(ScrollTrigger);

function handleClick(){
const phoneNumber = '972584142169'
window.open(`http://wa.me/${phoneNumber}`,"_blank")
}


  return <div className="whatsapp">
    <button className="btn" onClick={handleClick}>
<FontAwesomeIcon icon={faWhatsappSquare}  />
</button>
  </div>;
}

export default Whatsapp;
