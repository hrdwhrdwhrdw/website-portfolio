import React from "react";
import "./Skills.scss";
import { ReactComponent as WebIcon } from "../../assets/skills-icons/web-development-icon.svg";
import { ReactComponent as DebugIcon } from "../../assets/skills-icons/debug-icon.svg";
import { ReactComponent as ResponsiveIcon } from "../../assets/skills-icons/responsive-icon.svg";
import { ReactComponent as ErrorIcon } from "../../assets/skills-icons/error-icon.svg";

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
        <div class="skills__image">
          <div class="skills__image-block">
            <div class="side -main"></div>
            <div class="side -left"></div>
          </div>
          <div class="skills__image-block">
            <div class="side -main"></div>
            <div class="side -left"></div>
          </div>
          <div class="skills__image-block">
            <div class="side -main"></div>
            <div class="side -left"></div>
          </div>
        </div>
        <div className="descriptions">
          <article className="descriptions__block descriptions__block_front-skills">
            <WebIcon />
            <p className="goo">
              Knowledge of such front-end technologies as html, css, javascript,
              react, redux, typescript and etc.
            </p>
          </article>
          <article className="descriptions__block descriptions__block_debugging">
            <DebugIcon />
            <p>Solving problems by testing and debugging.</p>
          </article>
          <article className="descriptions__block descriptions__block_responsive-web">
            <ResponsiveIcon />
            <p>
              Bring web designs to life and maintain the website’s user
              interface and implement mobile-first or responsive design.
            </p>
          </article>
          <article className="descriptions__block descriptions__block_fix-bugs">
            <ErrorIcon />
            <p>Fix bugs and errors that pop up on the website.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
