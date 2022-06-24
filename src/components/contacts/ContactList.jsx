import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactList.scss";
import { ReactComponent as Twitter } from "../../assets/contacts-icons/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/contacts-icons/facebook.svg";
import { ReactComponent as Instargram } from "../../assets/contacts-icons/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/contacts-icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/contacts-icons/github.svg";
import { ThemeContextConsumer } from "../../utils/themeContext";

const ContactList = () => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <ul className={"contacts__list"}>
          <li className="contacts__item contact__item_twitter">
            <NavLink
              className={`contact__link contact__link_${context.theme}`}
              to="#"
            >
              <Twitter className="contact__icon" />
            </NavLink>
          </li>
          <li className="contacts__item contact__item_facebook">
            <NavLink
              className={`contact__link contact__link_${context.theme}`}
              to="#"
            >
              <Facebook />
            </NavLink>
          </li>
          <li className="contacts__item contact__item_instagram">
            <NavLink
              className={`contact__link contact__link_${context.theme}`}
              to="#"
            >
              <Instargram />
            </NavLink>
          </li>
          <li className="contacts__item contact__item_linkedin">
            <NavLink
              className={`contact__link contact__link_${context.theme}`}
              to="#"
            >
              <LinkedIn />
            </NavLink>
          </li>
          <li className="contacts__item contact__item_github">
            <NavLink
              className={`contact__link contact__link_${context.theme}`}
              to="#"
            >
              <Github />
            </NavLink>
          </li>
        </ul>
      )}
    </ThemeContextConsumer>
  );
};

export default ContactList;
