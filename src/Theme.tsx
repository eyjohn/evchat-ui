export interface Theme {
  colors: {
    background: string;
    backgroundAlt: string;
    foreground: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    background: "#FFF",
    backgroundAlt: "#EEE",
    foreground: "#000",
  }

};

export const DarkTheme: Theme = {
  colors: {
    background: "#222222",
    backgroundAlt: "#333333",
    foreground: "#FFF",
  }
};
