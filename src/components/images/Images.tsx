import { useEffect, useRef } from "react";
import image1 from '../../assets/images/financal.png'
import image2 from '../../assets/images/imageGenarator.png'
import "./images.css";
import gsap from "gsap";

function Images() {
  const images = [image1, image2];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.offsetWidth / 2;

    gsap.set(container, { x: 0 });

    gsap.to(container, {
      x: `+=${totalWidth}`,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    })
 
gsap.to(container,{
y: -100,
  ease:"power4.inOut",
 duration:5,
  scrollTrigger:{
    trigger:container,
    scrub:true,
  start:'top 10%',
  end:'+=200',

  }
})

  }, []);

  return (
    <div className="images">
      <div className="imgContainer" ref={containerRef}>
        {[...images,...images, ...images].map((img, index) => (
          <img src={img} key={index} className="img" />
        ))}
      </div>
    </div>
  );
}

export default Images;
