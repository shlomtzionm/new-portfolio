import { JSX, useEffect } from "react";
import "./home.css";
import Name from "../name/Name";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Images from "../images/Images";
import gsap from "gsap";
import Ball from "../ball/Ball";
function Home(): JSX.Element {



  return (
    <div className="home">
 <section className="header">
 <Header />
 </section>

 {/* <section className="images">
  <Images/>
 </section> */}
 <section className="name">
 <Name />
 </section>
 <section style={{height:'100vh'}} className="">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quidem nulla atque odio non distinctio sint tempora nobis dicta ducimus, facilis minus vitae veritatis eos soluta cum nisi et quis.</p>
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
