import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="home">
            Home
          </NavLink>
        </li>
        
        <li className="nav__item">
          <NavLink className="nav__link" to="skills">
            Skills
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
