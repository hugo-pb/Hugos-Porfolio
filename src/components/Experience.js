import React, { useEffect } from "react";
import "../styles/Experience.css";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="Experience">
      <h2 data-aos="fade-left">Experience</h2>
      <div className="row">
        <div className="col-md-6">
          <h3 data-aos="slide-up">Freelancer</h3>
          <img
            data-aos="flip-up"
            className="Img1"
            alt="salesforce"
            src={require("../img/Salesforce.png")}
          />
          <p data-aos="zoom-in-up">
            Working for companies like {""}
            <a
              href="https://www.insuremontrose.com"
              target="_blank"
              rel="noreferrer"
            >
              Montrose insurance
            </a>{" "}
            incorporating salesforce software, working on the back end and
            making an application to manege their data.
          </p>
        </div>
        <div className="col-md-6">
          <h3 data-aos="slide-up">WordPress Developer</h3>{" "}
          <img
            data-aos="flip-up"
            className="Img1"
            alt="3onw website"
            src={require("../img/3own.png")}
          />
          <p data-aos="zoom-in-up">
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
