import { JSX, useEffect } from "react";
import "./home.css";
import Name from "../name/Name";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Ball from "../whatsapp/Whatsapp";
import About from "../about/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "../projects/Projects";
gsap.registerPlugin(ScrollTrigger);

function Home(): JSX.Element {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      scrollTrigger: {
        trigger: ".name",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=290",
      },
    });
  }, []);

  return (
    <div className="home">
      <section className="header">
        <Header />
      </section>
      <section className="name">
        <Name />
      </section>
      <section id="about" className="about">
        <About />
      </section>
      <section className="projects">
        <Projects />
      </section>
      <section className="whatsapp">
        <Ball />
      </section>
      <section className="footer">
        <Footer />
      </section>
      <section className="line">
        <div className="line1"></div>
        <div className="line2"></div>
      </section>
    </div>
  );
}

export default Home;
