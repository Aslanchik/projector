import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../store/actions/authActions";

const LoggedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.logout}>Logout</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-2">
          AB
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(LoggedInLinks);
