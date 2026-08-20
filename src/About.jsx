import Profile from "./assets/Profile.jpg";

function About() {
  return (
    <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">

          {/* LEFT SIDE */}
          <div className="col-md-6">

            <div className="row justify-content-between gy-4">

              {/* IMAGE */}
              <div className="col-lg-5">
                <img
                  src={Profile}
                  alt="Shreyash Chougale"
                  className="about-img"
                  style={{
                    width: "200px",
                    height: "190px",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>

              {/* INFORMATION */}
              <div className="col-lg-7 about-info">

                <p>
                  <strong>Name: </strong>
                  <span>Shreyash Chougale</span>
                </p>

                <p>
                  <strong>Profile: </strong>
                  <span>Full Stack Developer</span>
                </p>

                <p>
                  <strong>Email: </strong>
                  <span>shreyashchougale121@gmail.com</span>
                </p>

                <p>
                  <strong>Phone: </strong>
                  <span>+91 7218109013</span>
                </p>

              </div>

            </div>


            {/* SKILLS */}
            <div className="skills-content">

              <h5>Skills</h5>

              {/* HTML */}
              <div className="progress">

                <span className="skill">
                  <span>HTML</span>
                  <i className="val">100%</i>
                </span>

                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></div>
                </div>

              </div>


              {/* CSS */}
              <div className="progress">

                <span className="skill">
                  <span>CSS</span>
                  <i className="val">90%</i>
                </span>

                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>

              </div>


              {/* JAVASCRIPT */}
              <div className="progress">

                <span className="skill">
                  <span>JavaScript</span>
                  <i className="val">85%</i>
                </span>

                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>

              </div>


              {/* REACT */}
              <div className="progress">

                <span className="skill">
                  <span>React</span>
                  <i className="val">90%</i>
                </span>

                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="col-md-6">

            <div className="about-me">

              <h4>About Me</h4>

              <p>
                I am Shreyash Chougale, a passionate and motivated
                engineering student with a strong interest in software
                development and modern web technologies. I enjoy building
                practical applications that solve real-world problems and
                continuously improving my technical knowledge through
                projects and hands-on learning.
              </p>

              <p>
                I have experience working with technologies such as Java,
                React.js, JavaScript, HTML, CSS, Spring Boot, and MySQL.
                I am particularly interested in full-stack development,
                where I can work on both user-friendly frontend interfaces
                and reliable backend systems.
              </p>

              <p>
                My goal is to become a skilled Full Stack Developer and
                contribute to meaningful software projects. I am a
                hardworking, adaptable, and collaborative person who enjoys
                solving problems and working with others.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;