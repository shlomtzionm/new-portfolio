import { JSX, useEffect } from "react";
import "./home.css";
import Name from "../name/Name";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Images from "../images/Images";
import gsap from "gsap";
import Ball from "../ball/Ball";
import About from "../about/About";
function Home(): JSX.Element {



  return (
    <div className="home">
 <section className="header">
 <Header />
 </section>

 <section className="line">
  <div className="line1"></div>
  <div className="line2"></div>
 </section>
 <section className="name">
 <Name />
 </section>
 <section id="about" className="about">
 <About/>
 </section>
 <section className="ball">
<Ball/>
 </section>
<section className="footer">
        <Footer />
</section>


   
    </div>
  );
}

export default Home;
