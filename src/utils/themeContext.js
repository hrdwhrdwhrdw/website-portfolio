import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: localStorage.getItem("data-theme") || "day",
  };

  toggleTheme = () => {
    if (this.state.theme === "day") {
      this.setState({ theme: "night" });
      localStorage.setItem("data-theme", "night");
    }
    if (this.state.theme === "night") {
      this.setState({ theme: "day" });
      localStorage.setItem("data-theme", "day");
    }
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
