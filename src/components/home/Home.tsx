import { JSX } from "react";
import Logo from "../logo/Logo";
import "../home/home.css"
import Menu from "../menu/Menu";


function Home(): JSX.Element {

  return (
    <div className="home">
   <Logo/>
   <Menu/>
    </div>
  );
}

export default Home;
