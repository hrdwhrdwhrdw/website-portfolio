import React from "react";
import Navbar from "./navbar/Navbar";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = ({ isModalOpen }) => {
  return (
    <header className="header">
      {!isModalOpen && (
        <>
          <Logo className="header__logo" />
          <Navbar />
        </>
      )}
    </header>
  );
};

export default Header;
