import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { logout } from "../../store/actions/authActions";
import Sidenav from "./Sidenav";

const Navbar = ({ auth, profile, ...props }) => {
  // INITIALIZE SIDENAV
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  });

  const links = auth.uid ? (
    <LoggedInLinks profile={profile} />
  ) : (
    <LoggedOutLinks />
  );

  return (
    <>
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              <div className="valign-wrapper">
                Projec
                <span className="material-icons logoIcon">highlight</span>
                or
              </div>
            </Link>
            <Link to="/" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            {auth.isLoaded && links}
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="slide-out">
        <Sidenav auth={auth} logout={props.logout} />
      </ul>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = ({ firebase: { auth, profile } }) => {
  return {
    auth,
    profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
