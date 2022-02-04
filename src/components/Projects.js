import React, { useEffect } from "react";
import "../styles/Projects.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="Projects">
      <h1 data-aos="fade-left" className="Project">
        Personal Projects
      </h1>

      <div className="row">
        <div className="col-md-6">
          <h2 data-aos="slide-up">
            {" "}
            <a
              href="https://vibrant-mestorf-8ee54c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              React-Weather
            </a>{" "}
          </h2>
          <img
            data-aos="flip-up"
            className="Img1"
            src={require("../img/WeatherAPP.png")}
            alt="Weather APP made with react.js"
          />
          <p data-aos="zoom-in-up">
            Built with React.js and an open weather map API, the user is able to
            search for current weather and the weekly forecast of any city.
          </p>
        </div>
        <div className="col-md-6">
          <h2 data-aos="slide-up">
            <a href="https://hugojocelyn.com" target="_blank" rel="noreferrer">
              Wedding Website{" "}
            </a>
          </h2>
          <img
            data-aos="flip-up"
            className="Img1"
            src={require("../img/Weddingrsvp.png")}
            alt="Weddingwebsite"
          />
          <p data-aos="zoom-in-up">
            Mobile-friendly invitation with an RSVP form. This project also
            incorporates a map for clear directions to the venue utilizing the
            Map Box API.
          </p>
        </div>
      </div>
    </div>
  );
}
