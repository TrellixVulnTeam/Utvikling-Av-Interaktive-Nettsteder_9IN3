import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const BookList = () => {
  const { state } = useContext(ThemeContext);
  // console.log(state); // {isLightTheme: true, light: {…}, dark: {…}}
  const { isLightTheme, light, dark } = state;
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
