import React from "react";
import "../styles/Projects.css"
export default function Projects() {
  return (
    <div className="Projects">
      <div className="row">
        {" "}
        <h1 className="Project">Projects</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <h1>
            {" "}
            <a
              href="https://61ddaf775671144dbcfa7b83--vibrant-mestorf-8ee54c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              React-Weather
            </a>{" "}
          </h1>
          <p>
            Fully functional Api weather aplication made with react displaying
            an interactive/animated background.{" "}
          </p>
        </div>
        <div className="col-6">
          <h1>
            <a href="https://hugojocelyn.com"  target="_blank"
              rel="noreferrer">Wedding Website </a>
          </h1>
          <p>While we were learning to code we desided to put in to practice this new skills so we develope our own webside for a very special ocation, using vanilla html, css, js, and php hugojocelyn.com</p>
        </div>
      </div>
    </div>
  );
}
