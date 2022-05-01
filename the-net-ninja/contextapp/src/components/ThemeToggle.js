import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

// const ThemeToggle = () => {
//   const { toggleTheme } = useContext(ThemeContext);
//   console.log(toggleTheme);

//   return <button>Toggle theme</button>;
// };

// export default ThemeToggle;

import { Component } from "react";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Change Theme</button>;
  }
}

export default ThemeToggle;
