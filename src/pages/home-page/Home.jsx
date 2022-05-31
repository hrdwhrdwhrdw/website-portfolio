import React from "react";
import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/gradient-logo.svg";

const Home = ({openContactForm}) => {
  return (
    <section className="main-hero">
      <div className="main-hero__content">
        <div className="main-hero__title">
          <h1>Albert Gilmitdinov</h1>
        </div>
        <div className="main-hero__subtitle">
          <p>Junior Front-end Developer</p>
        </div>
        <div className="main-hero__button-wrapper">
          <span to="#about" className="main-hero__about-button" onClick={() => openContactForm()}>
            <span>About me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </span>
        </div>
      </div>
      <div className="main-hero__image-block">
        <Logo className="main-hero__image" />
      </div>
    </section>
  );
};

export default Home;
