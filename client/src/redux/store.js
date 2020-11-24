import React, { useState } from "react";
import { createStore } from "redux";
import reducer from "./reducer";

export const store = createStore(reducer);

export const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeStore;
