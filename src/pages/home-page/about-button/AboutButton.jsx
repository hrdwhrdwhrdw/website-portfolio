import React from "react";
import { ThemeContextConsumer } from "../../../utils/themeContext";

export default function AboutButton({ openContactForm, initialize }) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button className="main-hero__button-wrapper">
          <span
            to="#about"
            className={`main-hero__about-button main-hero__about-button_${context.theme}`}
            data-animation={initialize ? "0,5s" : "1,5s"}
            onClick={() => openContactForm()}
          >
            <span className="main-hero__about-button-inner">About me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </span>
        </button>
      )}
    </ThemeContextConsumer>
  );
}
