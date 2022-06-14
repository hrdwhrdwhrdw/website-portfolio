import React from "react";
import Navbar from "./navbar/Navbar";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ResumeButton from "./navbar/ResumeButton/ResumeButton";
import ToggleThemeButton from "../../components/toggle-theme-button/ToggleThemeButton";

const Header = ({ isModalOpen }) => {
  return (
    <header className="header">
      {!isModalOpen && (
        <>
          <Logo className="header__logo" />
          <Navbar />
          <ResumeButton />
          <ToggleThemeButton />
        </>
      )}
    </header>
  );
};

export default Header;
