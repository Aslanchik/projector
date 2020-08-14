import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper amber">
      <div className="container">
        <Link to="/" className="brand-logo">
          Projector
        </Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
