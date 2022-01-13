import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="row">
        {" "}
        <h1>Projects</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <h1>
            {" "}
            <a href="https://61ddaf775671144dbcfa7b83--vibrant-mestorf-8ee54c.netlify.app/">
              React-Weather
            </a>{" "}
          </h1>
          <p>
            Fully functional Api weather aplication made with react displaying
            an interactive/animated background.{" "}
          </p>
        </div>
        <div className="col-6">
          <h1>
            <a href="https://hugojocelyn.com">Wedding Website </a>
          </h1>
          <p>Real website used for a real Wedding hugojocelyn.com</p>
        </div>
      </div>
    </div>
  );
}
