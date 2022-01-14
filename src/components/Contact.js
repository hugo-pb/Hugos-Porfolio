import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <ul>
        <li>
          <a href="https://github.com/hugo-pb" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="60px" />
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faMobile} />
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
      </ul>
    </div>
  );
}
