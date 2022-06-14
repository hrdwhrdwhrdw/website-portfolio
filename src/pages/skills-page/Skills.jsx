import React from "react";
import "./Skills.scss";

import SkillsImage from "./skills-image/SkillsImage";
import SkillsDescriptions from "./skills-descriptions/SkillsDescriptions";
import { ThemeContextConsumer } from "../../utils/themeContext";

const Skills = () => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <section className="skills">
          <div className="skills__title">
            <div className={`section-title section-title_${context.theme}`}>
              <h1>WHAT CAN I DO...</h1>
              <h1>WHAT CAN I DO...</h1>
            </div>
          </div>
          <div className="skills__image-wrapper">
            <SkillsImage />
            <SkillsDescriptions />
          </div>
        </section>
      )}
    </ThemeContextConsumer>
  );
};

export default Skills;
