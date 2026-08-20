import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Typed from "typed.js";

import hero from "./assets/hero.jpg";

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Java Developer",
        "Frontend Developer",
        "Backend Developer",
        "React Developer",
        "Web Developer",
      ],

      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>

      {/* Hero Section */}
      <section
        id="hero"
        className="hero section dark-background"
      >

        {/* Background Image */}
        <img
          src={hero}
          alt="Shreyash Chougale"
          data-aos="fade-in"
        />

        {/* Hero Content */}
        <div
          className="container d-flex flex-column align-items-center justify-content-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <h2>
            I am Shreyash Chougale
          </h2>

          <p>
            <span
              ref={typedElement}
              className="typed-text"
            ></span>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;