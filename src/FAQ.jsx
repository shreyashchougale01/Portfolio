import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What technologies do you work with?",
      answer:
        "I work with technologies such as React.js, Java, Spring Boot, JavaScript, HTML, CSS and MySQL to build modern web applications.",
    },
    {
      question: "Can you develop a complete full stack application?",
      answer:
        "Yes. I can develop complete applications with a React frontend, Java Spring Boot backend and MySQL database.",
    },
    {
      question: "Can you create a responsive website?",
      answer:
        "Yes. I create responsive websites that work smoothly on desktops, tablets and mobile devices.",
    },
    {
      question: "Do you work with React.js?",
      answer:
        "Yes. I use React.js to create interactive user interfaces, reusable components and modern single-page applications.",
    },
    {
      question: "Can you develop REST APIs?",
      answer:
        "Yes. I can create REST APIs using Java and Spring Boot and connect them with MySQL databases.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq section">

      <div className="container">

        <div className="row gy-4">

          {/* FAQ Introduction */}
          <div
            className="col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="content px-xl-5">

              <h3>
                <span>Frequently Asked </span>
                <strong>Questions</strong>
              </h3>

              <p>
                Find answers to common questions about my development
                skills, technologies, projects and services.
              </p>

            </div>
          </div>

          {/* FAQ List */}
          <div
            className="col-lg-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <div className="faq-container">

              {faqs.map((faq, index) => (

                <div
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  key={index}
                >

                  {/* Question */}
                  <h3 onClick={() => toggleFAQ(index)}>

                    <span className="num">
                      {index + 1}.
                    </span>

                    <span>
                      {faq.question}
                    </span>

                  </h3>

                  {/* Answer */}
                  <div
                    className="faq-content"
                    style={{
                      display:
                        activeIndex === index ? "block" : "none",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>

                  {/* Arrow */}
                  <i
                    className={`faq-toggle bi ${
                      activeIndex === index
                        ? "bi-chevron-down"
                        : "bi-chevron-right"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  ></i>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;