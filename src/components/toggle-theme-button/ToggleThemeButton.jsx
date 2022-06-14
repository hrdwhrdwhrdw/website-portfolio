import React from "react";
import { ThemeContextConsumer } from "../../utils/themeContext";
import "./ToggleThemeButton.scss";

const ToggleThemeButton = () => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="toggle-button">
          <input
            onChange={() => context.toggleTheme()}
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
          />
          <label htmlFor="toggle" className="toggle--label" />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default ToggleThemeButton;
