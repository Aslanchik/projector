import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";

const Navbar = ({ auth, profile, ...props }) => {
  const links = auth.uid ? (
    <LoggedInLinks profile={profile} />
  ) : (
    <LoggedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            Projector
          </Link>
          {auth.isLoaded && links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ firebase: { auth, profile } }) => {
  return {
    auth,
    profile,
  };
};

export default connect(mapStateToProps)(Navbar);
