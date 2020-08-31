import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row valign-wrapper">
        <div className="col s12 center-align">
          <p className="fieldTitle">Check out the code!</p>
          <div>
            <Link to="www.linkedin.com/in/aslan-badalov">
              <i class="devicon-linkedin-plain colored devI"></i>
            </Link>
            <Link to="https://github.com/Aslanchik/projector">
              <i class="devicon-github-plain colored devI"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
