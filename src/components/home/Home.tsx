import { JSX } from "react";
import Logo from "../logo/Logo";
import "./home.css";
import Menu from "../menu/Menu";
import Open from "../open/Open";

function Home(): JSX.Element {
  return (
    <div className="home">
 <section className="logo">
 <Logo />
 </section>
<section className="open">
        <Open />
</section>

<section className="next">

</section>
   
    </div>
  );
}

export default Home;
