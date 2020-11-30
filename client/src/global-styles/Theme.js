import React, { useContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const themes = {
  dark: {
    background: "slategray",
  },
  light: {
    background: "#fff",
  },
};

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      transition: all 0.5s;
    }
  `;

export const ThemeContext = React.createContext();

export const ThemeStore = ({ children }) => {
  const [theme, switchTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  );
};

export default Theme;
