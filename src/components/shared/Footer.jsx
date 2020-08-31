import React from "react";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="row">
        <div className="col s12 center-align">
          <p className="fieldTitle">Check out the code!</p>
          <div>
            <a
              href="https://www.linkedin.com/in/aslan-badalov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-linkedin-plain colored devI"></i>
            </a>
            <a
              href="https://www.github.com/Aslanchik/projector"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain colored devI"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
