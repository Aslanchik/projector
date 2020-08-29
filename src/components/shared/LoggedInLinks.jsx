import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../store/actions/authActions";

const LoggedInLinks = ({ profile, ...props }) => {
  return (
    <ul className="right">
      <div className="nav hide-on-med-and-down">
        <li>
          <NavLink to="/create-project">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/all-projects">All Projects</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
        <li>
          <Link to="/" onClick={props.logout}>
            Logout
          </Link>
        </li>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(LoggedInLinks);
