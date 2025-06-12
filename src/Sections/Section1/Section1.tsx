import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./Section1.css";

export default function Section1() {
  const container = useRef<HTMLElement>(null);

  // The 'container' is passed directly into the hook
  useGSAP(
    () => {
      // GSAP animations go here
      gsap.from(".section1__header", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.from("#box1, #box2", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.5,
      });

      gsap.from("#box3", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      });
    },
    { scope: container }
  ); // The scope is defined here

  return (
    // The ref is attached to the main element
    <section className="section1" ref={container}>
      <header>
        <h3 className="section1__header">
          Turning <br /> dreams into <br /> unforgettable <br /> moments.
        </h3>
      </header>
      <div id="container">
        <span id="box1"></span>
        <span id="box2"></span>
        <span id="box3"></span>
      </div>
    </section>
  );
}
