import React from "react";
import "./Skills.scss";

import SkillsImage from "./skills-image/SkillsImage";
import SkillsDescriptions from "./skills-descriptions/SkillsDescriptions";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__title">
        <div className="text-box">
          <h1>WHAT CAN I DO...</h1>
          <h1>WHAT CAN I DO...</h1>
        </div>
      </div>
      <div className="skills__image-wrapper">
        <SkillsImage />
        <SkillsDescriptions />
      </div>
    </section>
  );
};

export default Skills;
