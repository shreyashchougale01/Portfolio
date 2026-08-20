import resumePDF from "./assets/Shreyash_Chougale_Resume.pdf";

function Resume() {
  return (
    <>
      {/* Resume Section */}
      <section id="resume" className="resume section">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>

          <p>
            A motivated engineering student passionate about full-stack
            development and modern web technologies.
          </p>
        </div>

        <div className="container">

          <div className="row">

            {/* ================= LEFT SIDE ================= */}
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              {/* Summary */}
              <h3 className="resume-title">Summary</h3>

              <div className="resume-item pb-0">
                <h4>Shreyash Chougale</h4>

                <p>
                  <em>
                    Passionate engineering student and aspiring Full Stack
                    Developer with a strong interest in building practical
                    and user-friendly web applications.
                  </em>
                </p>

                <ul>
                  <li>Kolhapur, Maharashtra, India</li>
                  <li>Full Stack Developer</li>
                  <li>React.js | Java | Spring Boot | MySQL</li>
                </ul>
              </div>

              {/* Education */}
              <h3 className="resume-title">Education</h3>

              <div className="resume-item">
                <h4>Bachelor of Engineering</h4>

                <h5>2023 - Present</h5>

                <p>
                  <em>
                    Dr. D. Y. Patil Prathisthan's College of Engineering,
                    Kolhapur
                  </em>
                </p>

                <p>
                  Currently pursuing engineering with an interest in software
                  development, web technologies, and full-stack application
                  development.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="resume-item">

                <h4>Technical Skills</h4>

                <p>
                  <strong>Frontend:</strong>
                  {" "}HTML, CSS, JavaScript, React.js
                </p>

                <p>
                  <strong>Backend:</strong>
                  {" "}Java, Spring Boot
                </p>

                <p>
                  <strong>Database:</strong>
                  {" "}MySQL
                </p>

              </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              {/* Internship Experience */}
              <h3 className="resume-title">
                Internship Experience
              </h3>

              {/* Cognifyz */}
              <div className="resume-item">

                <h4>Web Developer Intern</h4>

                <h5>Internship</h5>

                <p>
                  <em>Cognifyz Technologies</em>
                </p>

                <ul>

                  <li>
                    Worked on web development tasks using HTML, CSS, PHP,
                    and Bootstrap.
                  </li>

                  <li>
                    Developed responsive and user-friendly web interfaces.
                  </li>

                  <li>
                    Improved practical knowledge of frontend web development.
                  </li>

                </ul>

              </div>


              {/* Skill Craft */}
              <div className="resume-item">

                <h4>Cybersecurity Intern</h4>

                <h5>Internship</h5>

                <p>
                  <em>Skill Craft Technology</em>
                </p>

                <ul>

                  <li>
                    Gained practical exposure to cybersecurity concepts.
                  </li>

                  <li>
                    Learned about ethical hacking and network security.
                  </li>

                  <li>
                    Worked on cybersecurity-related tasks and activities.
                  </li>

                </ul>

              </div>


              {/* Certifications */}
              <h3 className="resume-title">
                Certifications
              </h3>

              <div className="resume-item">

                <ul>

                  <li>
                    Build with AI Boot Camp – Antigravity
                  </li>

                  <li>
                    Frontend Developer (React) – HackerRank
                  </li>

                  <li>
                    Artificial Intelligence – Infosys
                  </li>

                </ul>

              </div>

            </div>

          </div>


          {/* ================= DOWNLOAD BUTTON ================= */}

          <div
            className="text-center mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <a
              href={resumePDF}
              download="Shreyash_Chougale_Resume.pdf"
              className="btn btn-primary"
            >

              <i className="bi bi-download me-2"></i>

              Download Resume

            </a>

          </div>

        </div>

      </section>
      {/* /Resume Section */}
    </>
  );
}

export default Resume;