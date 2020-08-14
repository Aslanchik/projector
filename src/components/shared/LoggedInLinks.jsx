import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-2">
          AB
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInLinks;
