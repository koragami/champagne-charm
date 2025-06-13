import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. Import ScrollTrigger
import { useGSAP } from "@gsap/react";

import "./Section1.css";

// 2. Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // --- Existing Animations ---
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

      // Animate just the paragraph text
      gsap.from("#about__section1__text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about__section1__text",
          start: "top 90%",
          toggleActions: "play none none none", // Play once
        },
      });

      // 3. --- New Reversible Animation for the Button ---
      gsap.from("#hire__us", {
        y: 50, // Start 50px below its final position
        opacity: 0, // Start invisible
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hire__us",
          start: "top 100%", // When the top of the button hits 90% from the top of the viewport
          end: "bottom 20%", // When the bottom of the button leaves 20% from the top
          // Defines what happens on enter, leave, enter back, and leave back
          toggleActions: "play reverse play reverse",
          // markers: true, for debugging purposes
        },
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
      <div id="container">
        <span id="box1"></span>
        <span id="box2"></span>
        <span id="box3"></span>
      </div>

      <div id="about__section1">
        <p id="about__section1__text">
          Indulge in the luxury you deserve while we handle every detail,
          ensuring your event surpasses even your wildest dreams. Say goodbye to
          stress and hello to seamless perfection as we guide you through the
          planning process with ease.{" "}
        </p>

        <button id="hire__us">Hire us</button>
      </div>
    </section>
  );
}
