import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="a-navbar">
      <ul>
        <li>
          <Link to="/" className="link">
            <span>Home</span>
            <div />
          </Link>
        </li>

        <li>
          <Link to="/units" className="link">
            <span>Units</span>
            <div />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
