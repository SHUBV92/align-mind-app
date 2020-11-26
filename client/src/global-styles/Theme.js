import React, { useContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const themes = {
  dark: {
    background: "#272823",
    title: "#6495ed",
    text: "#fff",
  },
  light: {
    background: "#fff",
    title: "#ff6347",
    text: "#000",
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
  const [theme, switchTheme] = useState("dark");
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
