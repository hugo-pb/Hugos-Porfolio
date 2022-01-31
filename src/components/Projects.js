import React from "react";
import "../styles/Projects.css";
export default function Projects() {
  return (
    <div className="Projects">
      <div className="row">
        {" "}
        <h1 className="Project">Projects</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>
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
            className="Img1"
            src={require("../img/WeatherAPP.png")}
            alt="Weather APP made with react.js"
          />
          <p>
            Built with React.js and an open weather map API, the user is able to
            search for current weather and the weekly forecast of any city.
          </p>
        </div>
        <div className="col-6">
          <h2>
            <a href="https://hugojocelyn.com" target="_blank" rel="noreferrer">
              Wedding Website{" "}
            </a>
          </h2>
          <img
            className="Img1"
            src={require("../img/Weddingrsvp.png")}
            alt="Weddingwebsite"
          />
          <p>
            Mobile-friendly invitation with an RSVP form. This project also
            incorporates a map for clear directions to the venue utilizing the
            Map Box API.
          </p>
        </div>
      </div>
    </div>
  );
}
