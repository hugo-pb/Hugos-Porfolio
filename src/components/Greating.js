import React from "react";
import { useSpring, animated } from "react-spring";
import "../styles/Greating.css"
export default function Greating() {
 const styles = useSpring({
   to: [{ opacity: 1, color: "#ffaaee", delay: 650 }],
   from: { opacity: 0, color: "white" },
 });
  return (
   <div className="Greating" >
      <animated.div style={styles}>
        
        
            
              <h3>Hey!   <br/>this is</h3>
          
       
   
      </animated.div>
  </div>
  );
}
