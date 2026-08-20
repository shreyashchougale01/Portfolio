import React, { useState } from "react";

import Project from "./assets/Project.jpg";
import Project2 from "./assets/Project2.jpg";
import Project3 from "./assets/Project3.jpg";
import Project4 from "./assets/Project4.jpg";
import Project5 from "./assets/Project5.jpg";
import Project6 from "./assets/Project6.jpg";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "web",
      title: "Full Stack Web Application",
      description:
        "A full stack web application with frontend, backend and database integration.",
      image: Project,
    },
    {
      id: 2,
      category: "react",
      title: "React Application",
      description:
        "Interactive React application built using reusable components and React hooks.",
      image: Project2,
    },
    {
      id: 3,
      category: "java",
      title: "Java Spring Boot Project",
      description:
        "REST API developed using Java, Spring Boot and MySQL.",
      image: Project3,
    },
    {
      id: 4,
      category: "react",
      title: "Shopping Cart",
      description:
        "Shopping cart application developed using React and Redux Toolkit.",
      image: Project4,
    },
    {
      id: 5,
      category: "web",
      title: "Service Booking System",
      description:
        "A web application for booking and managing local services.",
      image: Project5,
    },
    {
      id: 6,
      category: "java",
      title: "Student Management System",
      description:
        "Student management system developed using Java and MySQL.",
      image: Project6,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio section">

      {/* Section Title */}
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>
          Some of my projects and development work using modern technologies.
        </p>
      </div>

      <div className="container">

        {/* Filter Buttons */}
        <ul className="portfolio-filters">

          <li
            className={filter === "all" ? "filter-active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </li>

          <li
            className={filter === "web" ? "filter-active" : ""}
            onClick={() => setFilter("web")}
          >
            Web Development
          </li>

          <li
            className={filter === "react" ? "filter-active" : ""}
            onClick={() => setFilter("react")}
          >
            React
          </li>

          <li
            className={filter === "java" ? "filter-active" : ""}
            onClick={() => setFilter("java")}
          >
            Java
          </li>

        </ul>

        <br />

        {/* Projects */}
        <div className="row gy-4">

          {filteredProjects.map((project) => (
            <div
              className="col-lg-4 col-md-6"
              key={project.id}
            >

              <div className="portfolio-item">

                <img
                  src={project.image}
                  className="img-fluid"
                  alt={project.title}
                />

                <div className="portfolio-info">

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <a
                    href={project.image}
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>

                  <a
                    href="#"
                    className="details-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;