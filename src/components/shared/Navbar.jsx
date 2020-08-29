import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { logout } from "../../store/actions/authActions";

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
            <Link to="/" className="brand-logo row">
              <div className="valign-wrapper">
                Projec<span className="material-icons logoIcon">highlight</span>
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
        {auth.uid ? (
          <div className="loggedInSide">
            <li title="Add New Project">
              <NavLink to="/create-project">
                <span className="valign-wrapper">
                  <span className="material-icons">add_circle</span>
                  New Project
                </span>
              </NavLink>
            </li>
            <li title="All Projects">
              <NavLink to="/all-projects">
                <span className="valign-wrapper">
                  <span className="material-icons">collections</span> All
                  Projects
                </span>
              </NavLink>
            </li>
            <li title="My Profile">
              <NavLink to="/profile">
                <span className="valign-wrapper">
                  <span className="material-icons">portrait</span> My Profile
                </span>
              </NavLink>
            </li>
            <li title="Log Out">
              <Link to="/" onClick={props.logout}>
                <span className="valign-wrapper">
                  <span className="material-icons">eject</span> Log Out
                </span>
              </Link>
            </li>
          </div>
        ) : (
          <div className="loggedOutSide">
            <li title="Login">
              <NavLink to="/login">
                <span className="valign-wrapper">
                  <span className="material-icons">login</span> Login
                </span>
              </NavLink>
            </li>
            <li title="Register">
              <NavLink to="/register">
                <span className="valign-wrapper">
                  <span className="material-icons">how_to_reg</span> Register
                </span>
              </NavLink>
            </li>
          </div>
        )}
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
