import React, { useState, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

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
            <a href="H.palomerabecerra@gmail.com">
              H.palomerabecerra@gmail.com
            </a>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}
