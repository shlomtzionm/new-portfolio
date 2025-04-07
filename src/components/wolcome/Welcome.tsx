import { JSX, useEffect } from "react";
import "./welcome.css"
import gsap from "gsap";


function Welcome ():JSX.Element{

    
  useEffect(() => {
    const tl = gsap.timeline()

    // tl.to('.welcome',{
    //   y:-400,
    //   scrollTrigger:{
    //     trigger:'.welcome',
    //   start: 'top 50%',
    //   end:'+=500',
    //   scrub:true,

    //   pin:true
    //   }
    // })
  }, []);


return(<div className="welcome">
<p >
    welcome to my portfolio, hope you enjoy the ride!
</p>
    </div>)
}

export default Welcome