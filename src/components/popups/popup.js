import React, { useState, useRef } from "react";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
export default function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faMobile} size="lg" />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            (587) 566 4191
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}
