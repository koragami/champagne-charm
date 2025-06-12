import "./Navbar.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const container = useRef<HTMLElement>(null);

  // The 'container' is passed directly into the hook
  useGSAP(
    () => {
      // GSAP animations go here
      gsap.from(".business__name-title, .burger-wrapper", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    },
    { scope: container }
  ); // The scope is defined here

  return (
    // The ref is attached to the main element
    <nav ref={container}>
      <header className="business__header">
        <h1 className="business__name-title">
          <span className="champagne">Champagne </span>
          <span className="charm">Charm</span>
        </h1>
      </header>
      <div className="menu">
        <input
          type="checkbox"
          id="menu-trigger"
          className="menu-trigger hidden"
        />
        <label htmlFor="menu-trigger" className="burger-wrapper">
          <div className="hamburger"></div>
        </label>
      </div>
    </nav>
  );
}
