import React, {useEffect} from "react";
import "../styles/Greating.css"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Greating() {
 useEffect(() => {
   AOS.init({ duration: 3000 });
 }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="Greating"
    >
      <h3>
        Hey! <br />
        this is
      </h3>
    </div>
  );
}
