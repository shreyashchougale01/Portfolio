import React from "react";
import ReactDOM from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.jsx";

import "./DevFolio/assets/vendor/bootstrap/css/bootstrap.min.css";
import "./DevFolio/assets/css/main.css";

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);