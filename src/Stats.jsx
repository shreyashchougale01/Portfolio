import Statsbg from "./assets/Statsbg.jpg";
function Stats() {
  return (
    <section id="stats" className="stats section accent-background">

      <img
        src={Statsbg}
        alt="Electrical Services"
        data-aos="fade-in"
      />

      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="row gy-4">

          {/* Happy Clients */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span>0</span>
              <p>Happy Clients</p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span>5+</span>
              <p>Projects Completed</p>
            </div>
          </div>

          {/* Years Experience */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span>o.5+</span>
              <p>Years Experience</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span>24/7</span>
              <p>Customer Support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;