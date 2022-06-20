import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContextConsumer } from "../../../utils/themeContext";
import "./Navbar.scss";

const Navbar = ({isNavExpanded}) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <nav className={`nav nav_${context.theme}` + (isNavExpanded ? " show_side_bar" : "")}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className={`nav__link nav__link_${context.theme}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={`nav__link nav__link_${context.theme}`} to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={`nav__link nav__link_${context.theme}`} to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </ThemeContextConsumer>
  );
};

export default Navbar;
