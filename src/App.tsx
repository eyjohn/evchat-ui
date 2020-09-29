import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Container from "./components/Container";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Container />
    </ThemeProvider>
  );
};

export default App;
