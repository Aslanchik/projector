import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container notFound">
      <div className="section">
        <div className="row valign-wrapper">
          <img
            className="col s12 m4"
            src="/img/undraw_camping_noc8.svg"
            alt="page not found"
          />
          <h3 className="col s12 m8 fieldTitle">
            Seems like you got lost... <br />
            <Link to="/">Return To Familiar Ground</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
