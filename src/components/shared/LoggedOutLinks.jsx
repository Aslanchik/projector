import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutLinks;
