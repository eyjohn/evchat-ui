import React from "react";
import DynamicNamedThemeProvider from "./DynamicNamedThemeProvider";
import GlobalStyle from "./GlobalStyle";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <DynamicNamedThemeProvider>
      <GlobalStyle />
      <Layout />
    </DynamicNamedThemeProvider>
  );
};

export default App;
