import React from "react";
import { Link } from "react-router-dom";

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

export default Navbar;
