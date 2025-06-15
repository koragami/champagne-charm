import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Page.css";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const main = useRef(null);

  useGSAP(
    () => {
      // --- 1. Initial Loading Animation for Section 1 ---
      const initialLoadTl = gsap.timeline();
      initialLoadTl
        .from(".section1__header", {
          y: -50,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        })
        .from(
          ["#box1", "#box2"],
          {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.3,
          },
          "-=1"
        )
        .from(
          "#box3",
          { x: 100, opacity: 0, duration: 1.2, ease: "power2.out" },
          "<"
        )
        .from(
          ["#about__section1__text", "#hire__us"],
          {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=1"
        );

      // --- 2. Pin and Reverse Animation for Section 1 ---
      const pinSection1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          scrub: 1,
          pin: true,
          start: "top top",
        },
      });
      pinSection1Tl
        .to(
          ["#about__section1__text", "#hire__us"],
          { y: 50, opacity: 0, stagger: 0.1 },
          0
        )
        .to("#box3", { x: 100, opacity: 0 }, "<")
        .to(["#box1", "#box2"], { x: -100, opacity: 0, stagger: 0.1 }, "<")
        .to(".section1__header", { y: -50, opacity: 0 }, "<");

      // --- 3. Pin and Fade Out for Section 2 ---
      const pinSection2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          scrub: 1,
          pin: true,
          start: "top top", // Simplified start position
        },
      });
      pinSection2Tl.to(
        [
          ".section2__header",
          "#section2__image",
          ".section2__h3",
          "#section2__about",
        ],
        {
          opacity: 0,
          y: -30,
          stagger: 0.1,
        }
      );

      // --- 4. Pin and Fade Out for Section 3 ---
      const pinSection3Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          scrub: 1,
          pin: true,
          start: "top top", // Simplified start position
        },
      });
      pinSection3Tl.to(".section3 > *", {
        opacity: 0,
        y: -30,
        stagger: 0.1,
      });

      // KEY FIX: Refresh ScrollTrigger after a short delay
      // This gives the browser time to render images and finalize the layout,
      // then forces ScrollTrigger to recalculate all of its start/end positions.
      // This is the most critical step for mobile reliability.
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500); // A 500ms delay is usually safe. Adjust if needed.

      // Cleanup function to clear the timeout when the component unmounts
      return () => {
        clearTimeout(refreshTimeout);
      };
    },
    { scope: main } // Keep the scope to the main container
  );

  // The JSX structure remains the same, but is now wrapped in a main div with a ref
  return (
    <main ref={main}>
      <div className="centered__section">
        <section className="section1">
          <header>
            <h3 className="section1__header">
              Turning <br /> dreams into <br /> unforgettable <br /> moments.
            </h3>
          </header>
          <div id="container">
            <span id="box1">
              <img
                src="public/Pictures/First Image.png"
                alt="Bride & Groom Kissing"
              />
            </span>
            <span id="box2">
              <img src="public/Pictures/Second Image.png" alt="Flowers" />
            </span>
            <span id="box3">
              <img
                src="public/Pictures/Third image.png"
                alt="Father seeing bride groom off"
              />
            </span>
          </div>
          <div id="about__section1">
            <p id="about__section1__text">
              Indulge in the luxury you deserve while we handle every detail,
              ensuring your event surpasses even your wildest dreams. Say
              goodbye to stress and hello to seamless perfection as we guide you
              through the planning process with ease.{" "}
            </p>
            <button id="hire__us">Hire us</button>
          </div>
        </section>
        <section className="section2">
          <header>
            <h3 className="section2__header">Wedding Planning Solutions</h3>
          </header>
          <div id="section2__image"></div>
          <h3 className="section2__h3">Full Service Planning</h3>
          <div id="section2__about">
            <p id="section2__text">
              Relax and revel in the joy of your engagement while we handle the
              logistics, leaving you free to savor every moment. With our Full
              Service Planning, your wedding day will be a seamless blend of
              elegance, joy and cherished memories.
            </p>
            <button className="learn__more">Learn More</button>
          </div>
        </section>
        <section className="section3">
          <div id="section3__image">
            <img src="src/Pictures/Fifth Image.png" alt="Wedding Rings" />
          </div>
          <header>
            <h3 className="section3__h3">Day/Month of Coordination</h3>
          </header>
          <div id="section3__about">
            <div id="section3__text">
              <p>
                As your wedding coordinators, we step in during the final
                stretch, taking the lead to meticulously manage every detail.
                From vendor confirmations to timeline adjustments, we will
                handle it all. Allowing you to relax and soak in the joy of your
                celebration.
              </p>
              <button className="learn__more">Learn More</button>
            </div>
          </div>
        </section>
        <section className="section4">
          <div id="email__icon">
            <img src="src/Pictures/email-1-svgrepo-com.svg" />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="green"
              stroke-width="4"
              fill="yellow"
            />
          </div>
          <p className="get__weekly__emails">GET WEEKLY EMAILS BY OUR TEAM</p>
          <header>
            <h3 className="section4__h3">Champagne Charm</h3>
          </header>
          <aside>
            <p className="section4__text">
              Unlock the secrets to your dream wedding with exclusive tips,
              trends, and insider advice delivered straight to your inbox! Sign
              up now to join our community of soon-to-be-weds and receive expert
              insights, personalized inspiration, and special offers tailored
              just for you. Don't miss out on creating the perfect day—subscribe
              today!
            </p>
          </aside>
          <div id="references">
            <ul>
              <li>
                <a href="">Day/Month of Coordination</a>
              </li>
              <li>
                <a href="">Partial Wedding Planning</a>
              </li>
              <li>
                <a href="">Full Wedding Planning</a>
              </li>
            </ul>
          </div>
          <form>
            <input type="text" id="name__input" placeholder="Enter name here" />
            <input
              type="email"
              id="email__input"
              placeholder="Enter your email address here"
            />
            <button type="submit" id="sign__up">
              Sign Up
            </button>
          </form>
        </section>
        <footer>
          <header>
            <h3 className="footer__header">
              Welcome to <br /> Champagne Charm
            </h3>
          </header>
          <div className="footer__container">
            <div className="left__of__footer">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Freebie</a>
                </li>
                <li>
                  <a href="">Full Service</a>
                </li>
                <li>
                  <a href="">Partial Service</a>
                </li>
                <li>
                  <a href="">Coordination</a>
                </li>
              </ul>
            </div>
            <div className="right__of__footer">
              <ul>
                <li>
                  <a href="">Site Design Credit</a>
                </li>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="social__media__icons">
              <div id="instagram"></div>
              <div id="facebook"></div>
              <div id="pinterest"></div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
