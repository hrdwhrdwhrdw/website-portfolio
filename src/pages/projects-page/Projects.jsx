import React from "react";
import "./Projects.scss";
import { store } from "../../store";
import Project from "./project/Project";

export default function Projects() {
  let projects = store.projects;
  return (
    <section className="projects">
      <div className="projects__title">
        <div className="text-box">
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
  );
}
