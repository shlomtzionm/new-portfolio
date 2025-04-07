import { JSX, useEffect } from "react";
import "./home.css";
import Open from "../footer/Footer";
import Name from "../name/Name";
import Footer from "../footer/Footer";
function Home(): JSX.Element {


  return (
    <div className="home">
 <section className="name">
 <Name />
 </section>
 <section className="name">
 <Name />
 </section>
<section className="footer">
        <Footer />
</section>


   
    </div>
  );
}

export default Home;
