import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Have a project or opportunity in mind? Feel free to get in touch
          with me.
        </p>
      </div>

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        {/* Contact Information */}
        <div
          className="info-wrap"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="row gy-5">

            {/* Location */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">

                <i className="bi bi-geo-alt flex-shrink-0"></i>

                <div>
                  <h3>Location</h3>
                  <p>Kolhapur, Maharashtra, India</p>
                </div>

              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">

                <i className="bi bi-telephone flex-shrink-0"></i>

                <div>
                  <h3>Call Me</h3>
                  <p>+91 7218109013</p>
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">

                <i className="bi bi-envelope flex-shrink-0"></i>

                <div>
                  <h3>Email Me</h3>
                  <p>shreyashchougale121@gmail.com</p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <div className="row gy-4">

            {/* Name */}
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject */}
            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="col-md-12">
              <textarea
                name="message"
                className="form-control"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-md-12 text-center">

              {status && (
                <div className="sent-message">
                  {status}
                </div>
              )}

              <button type="submit">
                Send Message
              </button>

            </div>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Contact;