import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer" className="footer accent-background">

        <div className="container">

          {/* Copyright */}
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">
                Shreyash Chougale
              </strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links d-flex justify-content-center">

            <a
              href="https://github.com/shreyashchougale01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/shreyash-chougale-73a59b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://www.instagram.com/yash_c_01?igsh=MW1kZ3Njc3h6b3ZmcQ%3D%3D&utm_source=qr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              aria-label="Email"
            >
              <i className="bi bi-envelope"></i>
            </a>

          </div>

          {/* Developer Information */}
          <div className="credits text-center">
            <p>
              Designed & Developed by{" "}
              <strong>Shreyash Chougale</strong>
            </p>

            <p>
              Full Stack Developer | React.js | Java | Spring Boot | MySQL
            </p>
          </div>

        </div>

      </footer>

      {/* Scroll To Top */}
      <button
        type="button"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
}

export default Footer;