import React, { useState, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { useForm } from "react-hook-form";
export default function Mail() {
  const [show, setShow] = useState(false);
  const target = useRef(null);



  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faEnvelope} />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-Mail" {...props}>
            <form id="contact-form" >
              <input type="text"  placeholder="Name" />
              <br />
              <input type="email" name="user_email" placeholder="Email" />
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
