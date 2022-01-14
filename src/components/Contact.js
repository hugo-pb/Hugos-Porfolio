import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Mail from "./popups/Mail";

import "../styles/Contact.css";
import "bootstrap"
import Example from "./popups/popup";
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
          <Example />
        </li>
        <li>
          {" "}
          <Mail />
        </li>
      </ul>
    </div>
  );
}
