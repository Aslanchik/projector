import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";

const Navbar = ({ auth, ...props }) => {
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav className="nav-wrapper amber">
      <div className="container">
        <Link to="/" className="brand-logo">
          Projector
        </Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
