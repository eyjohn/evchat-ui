import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
