import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./Section1.css";

export default function Section1() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Animate the header from the top (existing animation)
      gsap.from(".section1__header", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // ✅ 2. Animate #box1 and #box2 from the left
      gsap.from("#box1, #box2", {
        x: -100, // Start 100px to the left
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3, // Animate them 0.3s after one another
        delay: 0.5, // Start this animation 0.5s after the hook runs
      });

      // ✅ 3. Animate #box3 from the right
      gsap.from("#box3", {
        x: 100, // Start 100px to the right
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5, // Start at the same time as the other boxes
      });
    },
    { scope: container }
  );

  return (
    <section className="section1" ref={container}>
      <header>
        <h3 className="section1__header">
          Turning <br /> dreams into <br /> unforgettable <br /> moments.
        </h3>
      </header>
      {/* The container for your animated boxes */}
      <div id="container">
        <span id="box1"></span>
        <span id="box2"></span>
        <span id="box3"></span>
      </div>
    </section>
  );
}
