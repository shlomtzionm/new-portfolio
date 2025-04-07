import { JSX, useEffect } from "react";
import "./home.css";
import Name from "../name/Name";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Images from "../images/Images";
import Welcome from "../wolcome/Welcome";
import gsap from "gsap";
function Home(): JSX.Element {



  return (
    <div className="home">
 <section className="header">
 <Header />
 </section>

 <section className="images">
  <Images/>
 </section>
 <section className="name">
 <Name />
 </section>
 <section className="welcome">
 <Welcome/>
 </section>
<section className="footer">
        <Footer />
</section>


   
    </div>
  );
}

export default Home;
