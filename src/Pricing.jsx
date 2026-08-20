import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="pricing section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>What I Offer</h2>
        <p>
          Affordable and professional solutions for websites and web
          applications.
        </p>
      </div>

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="row gy-4 gx-lg-5">

          {/* Website Development */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>Website Development</h3>
                <p>Responsive and modern websites</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

          {/* React Development */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>React Development</h3>
                <p>Interactive React websites and applications</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

          {/* Full Stack Development */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>Full Stack Development</h3>
                <p>Frontend, backend and database solutions</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

          {/* Spring Boot */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>Spring Boot API</h3>
                <p>Java REST APIs with Spring Boot and MySQL</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>E-Commerce Website</h3>
                <p>Online store with cart and product management</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

          {/* Portfolio */}
          <div className="col-lg-6">
            <div className="pricing-item d-flex justify-content-between">
              <div>
                <h3>Portfolio Website</h3>
                <p>Professional portfolio for students and developers</p>
              </div>
              <h4>Availabel</h4>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;