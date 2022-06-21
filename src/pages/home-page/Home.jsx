import React from "react";
import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/gradient-logo.svg";
import AboutButton from "./about-button/AboutButton";
import { ThemeContextConsumer } from "../../utils/themeContext";

const Home = ({ openContactForm }) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <section className="main-hero">
          <div className="main-hero__inner">
            <div className="main-hero__content">
              <div className="main-hero__title">
                <h1 className="main-hero__title-inner">Albert Gilmitdinov</h1>
              </div>
              <div className="main-hero__subtitle">
                <p className="main-hero__subtitle-inner">
                  Junior Front-end Developer
                </p>
                <AboutButton openContactForm={openContactForm} />
              </div>
            </div>
          </div>
          <div className="main-hero__image-block">
            <Logo
              className={`main-hero__image main-hero__image_${context.theme}`}
            />
          </div>
        </section>
      )}
    </ThemeContextConsumer>
  );
};

export default Home;
