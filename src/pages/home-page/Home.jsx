import React from "react";
import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/gradient-logo.svg";
import AboutButton from "./about-button/AboutButton";

const Home = ({ openContactForm }) => {
  return (
    <section className="main-hero">
      <div className="main-hero__content">
        <div className="main-hero__title">
          <h1>Albert Gilmitdinov</h1>
        </div>
        <div className="main-hero__subtitle">
          <p>Junior Front-end Developer</p>
        </div>
        <AboutButton openContactForm={openContactForm} />
      </div>
      <div className="main-hero__image-block">
        <Logo className="main-hero__image" />
      </div>
    </section>
  );
};

export default Home;
