import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = (props) => {
  return props.auth.uid ? (
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
            <span className="material-icons">collections</span> All Projects
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
  );
};

export default Sidenav;
