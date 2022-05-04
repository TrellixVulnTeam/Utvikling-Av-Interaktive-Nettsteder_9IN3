import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { state } = useContext(ThemeContext);
  // console.log(state); // {isLightTheme: true, light: {…}, dark: {…}}
  const { isLightTheme, light, dark } = state;
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Contextapp</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
