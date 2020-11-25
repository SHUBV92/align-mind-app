import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./redux/store";

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

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  console.log("Theme.js: ", themes[theme]);
  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  );
};

export default Theme;