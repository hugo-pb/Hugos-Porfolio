import React, { useState, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import emailjs from "@emailjs/browser";
export default function Mail() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0o5sxk",
        "template_9tp1wc8",
        e.target,
        "user_9a1xFu4TkjIjEATG3yLDW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faEnvelope} />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-Mail" {...props}>
            <form id="contact-form" onSubmit={sendEmail} method="post">
              <input type="text" placeholder="Name" name="name" />
              <br />
              <input type="email"  placeholder="Email" name="email" />
              <br />
              <textarea name="message" placeholder="Message" />
              <br />
              <input type="submit" value="Send" />
            </form>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}
