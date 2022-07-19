import React from "react";
import avatar from "../../../assets/avatar.jpg";
import { ThemeContextConsumer } from "../../../utils/themeContext";

const AboutInfo = ({ isModalOpen }) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div
          className={
            `half-contact half-contact_about` +
            (isModalOpen ? " show-half-contact_about" : "")
          }
        >
          <div className="half-contact__wrapper half-contact__wrapper_about">
            <div className="half-contact__info-block">
              <div className="half-contact__title">
                <h2>About me:</h2>
              </div>
              <div className="half-contact__subtitle">
                <h4>Frontend-developer</h4>
              </div>
              <div className="half-contact__about-info">
                <p>
                Hi! My name is Albert. I'm beginner front-end developer. I have
been studying programming for 9 months. I draw information
from various sources: tutorials, blogs, video tutorials,
conferences, and, of course, white papers.I decided to go into
programming professionally to design and maintain complex
systems, and I consider web development to be a promising
direction to start in this area. I am attracted by the opportunity
to apply rational thinking in my work and at the same time see
a concrete result. 
                </p>
              </div>
            </div>
            <div
              className={`half-contact__image-block half-contact__image-block_${context.theme}`}
            >
              <div
                className={`half-contact__image-wrapper half-contact__image-wrapper_${context.theme}`}
              >
                <img src={avatar} alt="" className="half-contact__image" />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default AboutInfo;
