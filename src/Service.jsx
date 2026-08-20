import "bootstrap-icons/font/bootstrap-icons.css";
{/* Services Section */}
function Service()
{
    return(
        <>
<section id="services" className="services section">

  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Services</h2>
    <p>
      I provide modern and reliable web development solutions using
      frontend and backend technologies.
    </p>
  </div>

  <div className="container">

    <div className="row gy-4">

      {/* Service 1 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-code-slash"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>Web Development</h3>
          </a>

          <p>
            I build responsive and user-friendly websites using HTML,
            CSS, JavaScript, Bootstrap, and modern web development
            technologies.
          </p>

        </div>
      </div>

      {/* Service 2 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-window-stack"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>React Development</h3>
          </a>

          <p>
            I develop interactive and responsive frontend applications
            using React.js, reusable components, hooks, and modern UI
            techniques.
          </p>

        </div>
      </div>

      {/* Service 3 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-server"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>Backend Development</h3>
          </a>

          <p>
            I create backend applications and REST APIs using Java,
            Spring Boot, and MySQL with a focus on clean and reliable
            application architecture.
          </p>

        </div>
      </div>

      {/* Service 4 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-database"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>Database Management</h3>
          </a>

          <p>
            I work with MySQL databases to design tables, manage data,
            perform CRUD operations, and connect databases with web
            applications.
          </p>

        </div>
      </div>

      {/* Service 5 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-phone"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>Responsive Design</h3>
          </a>

          <p>
            I create responsive websites that provide a smooth user
            experience across desktops, tablets, and mobile devices.
          </p>

        </div>
      </div>

      {/* Service 6 */}
      <div
        className="col-lg-4 col-md-6"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="service-item position-relative">

          <div className="icon">
            <i className="bi bi-gear"></i>
          </div>

          <a href="#" className="stretched-link">
            <h3>Full Stack Solutions</h3>
          </a>

          <p>
            I develop complete full-stack applications by combining
            React.js frontend, Java Spring Boot backend, REST APIs,
            and MySQL database technologies.
          </p>

        </div>
      </div>

    </div>

  </div>

</section>
</>
    )
}
export default Service;
{/* /Services Section */}