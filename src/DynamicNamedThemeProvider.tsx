import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, ThemeMap } from "./theme";
import storage from "local-storage-fallback";

export interface ThemeContextValue {
  themeName: string;
  setThemeByName: Function;
}

const defaultValue: ThemeContextValue = {
  themeName: "",
  setThemeByName: () => {},
};

export const ThemeContext = React.createContext<ThemeContextValue>(
  defaultValue
);

function getStoredThemeName(): string {
  const savedTheme = storage.getItem("theme") as string;
  return ThemeMap.has(savedTheme) ? savedTheme : ThemeMap.keys().next().value;
}

function setStoredThemeName(themeName: string) {
  storage.setItem("theme", themeName);
}

const DynamicNamedThemeProvider: React.FC = (props) => {
  const [themeName, setThemeName] = useState(getStoredThemeName);
  const [theme, setTheme] = useState<Theme>(ThemeMap.get(themeName) as Theme);

  function setThemeByName(themeName: string) {
    if (ThemeMap.has(themeName)) {
      setThemeName(themeName);
      setTheme(ThemeMap.get(themeName) as Theme);
      setStoredThemeName(themeName);
    }
  }

  const appContext: ThemeContextValue = {
    themeName,
    setThemeByName,
  };
  return (
    <ThemeContext.Provider value={appContext}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default DynamicNamedThemeProvider;
