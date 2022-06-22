import React, { useEffect, useState } from "react";
import { ReactComponent as WebIcon } from "../../../assets/skills-icons/web-development-icon.svg";
import { ReactComponent as DebugIcon } from "../../../assets/skills-icons/debug-icon.svg";
import { ReactComponent as ResponsiveIcon } from "../../../assets/skills-icons/responsive-icon.svg";
import { ReactComponent as ErrorIcon } from "../../../assets/skills-icons/error-icon.svg";
import { ThemeContextConsumer } from "../../../utils/themeContext";

export default function SkillsDescriptions() {
  const [isSkillsDescriptionsLoaded, setIsSkillsDescriptionsLoaded] =
    useState(false);
  useEffect(() => {
    setIsSkillsDescriptionsLoaded(true);
  }, []);
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="descriptions">
          <article
            className={
              `descriptions__block descriptions__block_${context.theme} descriptions__block_front-skills` +
              (isSkillsDescriptionsLoaded
                ? " descriptions__block_front-skills-loaded"
                : "")
            }
          >
            <WebIcon />
            <p>
              Knowledge of such front-end technologies as html, css, javascript,
              react, redux, typescript and etc.
            </p>
          </article>
          <article
            className={
              `descriptions__block descriptions__block_${context.theme} descriptions__block_debugging` +
              (isSkillsDescriptionsLoaded
                ? " descriptions__block_debugging-loaded"
                : "")
            }
          >
            <DebugIcon />
            <p>Solving problems by testing and debugging.</p>
          </article>
          <article
            className={
              `descriptions__block descriptions__block_${context.theme} descriptions__block_responsive-web` +
              (isSkillsDescriptionsLoaded
                ? " descriptions__block_responsive-web-loaded"
                : "")
            }
          >
            <ResponsiveIcon />
            <p>
              Bring web designs to life and maintain the website’s user
              interface and implement mobile-first or responsive design.
            </p>
          </article>
          <article
            className={
              `descriptions__block descriptions__block_${context.theme} descriptions__block_fix-bugs` +
              (isSkillsDescriptionsLoaded
                ? " descriptions__block_fix-bugs-loaded"
                : "")
            }
          >
            <ErrorIcon />
            <p>Fix bugs and errors that pop up on the website.</p>
          </article>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
