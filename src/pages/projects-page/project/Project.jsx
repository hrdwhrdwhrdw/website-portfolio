import React from "react";
import "./Project.scss";
import { ReactComponent as GithubLink } from "../../../assets/githubLink.svg";
import { ReactComponent as Link } from "../../../assets/link.svg";
import { ThemeContextConsumer } from "../../../utils/themeContext";

export default function Project({ project }) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="project__item">
          <div className="project__image">
            <img
              src={require("../../../assets/projects-images/website.jpg")}
              alt=""
            />
          </div>
          <div className="project__content">
            <h1 className="project__title">{project.title}</h1>
            <p className={`project__desc project__desc_${context.theme}`}>
              {project.description}
            </p>
            <div className="project__tech-list">
              {project.techList.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
            <div className={`project__links project__links_${context.theme}`}>
              <a href={project.links.github}>
                <GithubLink />
              </a>
              <a href={project.links.website}>
                <Link />
              </a>
            </div>
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
