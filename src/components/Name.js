import React, { useEffect } from "react";
import "../styles/Name.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Name() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" className="Name">
      <h1>Hugo Palomera</h1>
      <p>React.js Developer based in Edmonton Canada.</p>
    </div>
  );
}
