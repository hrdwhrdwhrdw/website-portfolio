import React from "react";
import "./ResumeButton.scss";
import resume from "../../../../assets/AlbertResume.pdf";
import { ThemeContextConsumer } from "../../../../utils/themeContext";

export default function ResumeButton() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button className={`resume__button resume__button_${context.theme}`}>
          <a
            href={resume}
            target="_blank"
            className={`resume__link resume__link_${context.theme}`}
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
      )}
    </ThemeContextConsumer>
  );
}
