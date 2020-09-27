import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import Container from "./components/Container";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Container>
        <div>Hello World</div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
