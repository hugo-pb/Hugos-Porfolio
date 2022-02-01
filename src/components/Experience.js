import React from "react";
import "../styles/Experience.css";
export default function Experience() {
  return (
    <div className="Experience">
      <h2>Experiences</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Freelancer</h3>
          <img
            className="Img1"
            alt="salesforce"
            src={require("../img/Salesforce.png")}
          />
          <p>
            Working for companies like {""}
            <a href="https://www.insuremontrose.com">Montrose insurance</a>{" "}
            incorporating salesforce software, working on the back end and
            making an application to manege their data.
          </p>
        </div>
        <div className="col-md-6">
          <h3>WordPress Developer</h3>{" "}
          <img
            className="Img1"
            alt="3onw website"
            src={require("../img/3own.png")}
          />
          <p>
            Working alongside SEO experts at{" "}
            <a
              href="https://www.digitizemedia.ca"
              target="_blank"
              rel="noreferrer"
            >
              Digitize Media
            </a>
            , to assist small-to-medium-sized businesses in achieving their
            technological objectives.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
