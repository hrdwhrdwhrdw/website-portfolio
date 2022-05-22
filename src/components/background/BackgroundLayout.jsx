import React from "react";
import "./background.scss";
import typescriptIcon from "../../assets/background-icons/typescript-icon.svg";
import javascriptIcon from "../../assets/background-icons/javascript-icon.svg";
import angularIcon from "../../assets/background-icons/angular-icon.svg";
import cssIcon from "../../assets/background-icons/css3-icon.svg";
import dockerIcon from "../../assets/background-icons/docker-icon.svg";
import gitIcon from "../../assets/background-icons/git-icon.svg";
import githubIcon from "../../assets/background-icons/github-icon.svg";
import graphqlIcon from "../../assets/background-icons/graphql-icon.svg";
import gulpIcon from "../../assets/background-icons/gulp-icon.svg";
import htmlIcon from "../../assets/background-icons/html-icon.svg";
import jsonIcon from "../../assets/background-icons/json-icon.svg";
import mongoIcon from "../../assets/background-icons/mongodb-icon.svg";
import nodeIcon from "../../assets/background-icons/node-icon.svg";
import reduxIcon from "../../assets/background-icons/redux-icon.svg";
import vueIcon from "../../assets/background-icons/vue-icon.svg";
import webpackIcon from "../../assets/background-icons/webpack-icon.svg";

const BackgroundLayout = ({mousePosition}) => {
  

  return (
    <div className="background">
      <img
        className="background__icon background_typescriptIcon"
        src={typescriptIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_javascriptIcon"
        src={javascriptIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_angularIcon"
        src={angularIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_cssIcon"
        src={cssIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_dockerIcon"
        src={dockerIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_gitIcon"
        src={gitIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_githubIcon"
        src={githubIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_graphqlIcon"
        src={graphqlIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_gulpIcon"
        src={gulpIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_htmlIcon"
        src={htmlIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_jsonIcon"
        src={jsonIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_mongoIcon"
        src={mongoIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_nodeIcon"
        src={nodeIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_reduxIcon"
        src={reduxIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_vueIcon"
        src={vueIcon}
        alt=""
        style={{
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <img
        className="background__icon background_webpackIcon"
        src={webpackIcon}
        alt=""
        style={{
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
    </div>
  );
};

export default BackgroundLayout;
