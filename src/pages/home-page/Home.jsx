import React from "react";
import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/gradient-logo.svg";
import AboutButton from "./about-button/AboutButton";
import { ThemeContextConsumer } from "../../utils/themeContext";

const Home = ({ openContactForm, initialize }) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <section className="main-hero">
          <div
            className="main-hero__inner"
            data-animation={initialize ? "1,5s" : "2,5s"}
          >
            <div
              className="main-hero__content"
              data-animation={initialize ? "1,5s" : "2,5s"}
            >
              <div
                className="main-hero__title"
                data-animation={initialize ? "1,5s" : "2,5s"}
              >
                <h1
                  className="main-hero__title-inner"
                  data-animation={initialize ? "0,5s" : "1,5s"}
                >
                  Albert Gilmitdinov
                </h1>
              </div>
              <div
                className="main-hero__subtitle"
                data-animation={initialize ? "1,5s" : "2,5s"}
              >
                <p
                  className="main-hero__subtitle-inner"
                  data-animation={initialize ? "0,5s" : "1,5s"}
                >
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
