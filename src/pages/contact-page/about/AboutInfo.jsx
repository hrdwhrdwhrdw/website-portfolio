import React from "react";
import avatar from "../../../assets/avatar.jpg";

const AboutInfo = () => {
  return (
    <div className="half-contact half-contact_about">
      <div className="half-contact__wrapper half-contact__wrapper_about">
        <div className="half-contact__info-block">
          <div className="half-contact__title">
            <h2>Something about me ;p</h2>
          </div>
          <div className="half-contact__subtitle">
            <h4>Frontend-developer</h4>
          </div>
          <div className="half-contact__about-info">
            <p>
              I'm Albert Gilmitdinov, a 22-year-old junior front-end developer. I'm a
              weird guy who likes making weird things with web technologies. I
              like to resolve design problems, create smart user interface and
              imagine useful interaction, developing rich web experiences & web
              applications. When not working or futzing around with code, I
              study how to escape from University. 
            </p>
          </div>
        </div>
        <div className="half-contact__image-block">
          <div className="half-contact__image-wrapper">
            <img src={avatar} alt="" className="half-contact__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
