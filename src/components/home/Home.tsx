import { JSX } from "react";
import "./home.css";
import Name from "../name/Name";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Ball from "../ball/Ball";
import About from "../about/About";
function Home(): JSX.Element {
  return (
    <div className="home">
      <section className="name">
        <Name />
      </section>
      <section className="footer">
          <Footer />
        </section>
      <div>
        <section className="header">
          <Header />
        </section>

        <section className="line">
          <div className="line1"></div>
          <div className="line2"></div>
        </section>

        <section id="about" className="about">
          <About />
        </section>
        <section className="ball">
          <Ball />
        </section>
   
      </div>
    </div>
  );
}

export default Home;
