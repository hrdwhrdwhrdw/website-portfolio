import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContextConsumer } from "../../../utils/themeContext";
import "./Navbar.scss";

const Navbar = ({ isNavExpanded, shrinkNav }) => {
  
  return (
    <ThemeContextConsumer>
      {(context) => (
        <nav
          className={
            `nav nav_${context.theme}` +
            (isNavExpanded ? " show_side_bar" : "") 
          }
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className={`nav__link nav__link_${context.theme}`}
                to="/"
                onClick={() => shrinkNav()}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={`nav__link nav__link_${context.theme}`}
                to="/skills"
                onClick={() => shrinkNav()}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={`nav__link nav__link_${context.theme}`}
                to="/projects"
                onClick={() => shrinkNav()}
              >
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
