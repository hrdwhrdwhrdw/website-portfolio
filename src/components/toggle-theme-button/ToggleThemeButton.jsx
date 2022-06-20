import React, { useEffect, useState } from "react";
import { ThemeContextConsumer } from "../../utils/themeContext";
import "./ToggleThemeButton.scss";

const ToggleThemeButton = ({ toggleTheme, theme }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    if (theme === "day") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [theme]);

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="toggle-button">
          <input
            onChange={() => toggleTheme()}
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            checked={!isChecked}
          />
          <label htmlFor="toggle" className="toggle--label" />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default ToggleThemeButton;
