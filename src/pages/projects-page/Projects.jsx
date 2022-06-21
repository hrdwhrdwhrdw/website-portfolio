import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { store } from "../../store";
import Project from "./project/Project";
import { ThemeContextConsumer } from "../../utils/themeContext";

export default function Projects() {
  const [isTitleLoaded, setIsTitleLoaded] = useState(false);
  useEffect(() => {
    setIsTitleLoaded(true);
  }, []);
  let projects = store.projects;
  return (
    <ThemeContextConsumer>
      {(context) => (
        <section className="projects">
          <div
            className={
              "projects__title" + (isTitleLoaded ? " projects__title-loaded" : "")
            }
          >
            <div className={`section-title section-title_${context.theme}`}>
              <h1>APPS I'VE BUILT</h1>
              <h1>APPS I'VE BUILT</h1>
            </div>
          </div>
          <ul className="projects__list">
            {projects.map((item) => (
              <Project key={item.id} project={item} />
            ))}
          </ul>
        </section>
      )}
    </ThemeContextConsumer>
  );
}
