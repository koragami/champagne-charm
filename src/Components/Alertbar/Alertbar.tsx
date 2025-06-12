import "./Alertbar.css";
import gsap from "gsap";

export default function Alertbar() {
  gsap.to(".alert__bar", {
    x: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.1,
  });

  return (
    <>
      <div className="alert__bar">
        <p>Now taking clients for 2026 & 2027</p>
      </div>
    </>
  );
}
