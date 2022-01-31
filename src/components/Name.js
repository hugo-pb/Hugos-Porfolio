import React from "react";
import "../styles/Name.css";
import { useSpring, animated } from "react-spring";
export default function Name() {
  const styles = useSpring({
    to: [{ marginLeft: 0, delay: 850,  }],
    from: { marginLeft: 500000 },
   
  });
  return (
    <div className="Name">
      <animated.div style={styles}>
        <h1>Hugo Palomera</h1>
        <p>React.js Developer based in Edmonton Canada.</p>
      </animated.div>
    </div>
  );
}
