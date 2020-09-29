export interface Theme {
  colors: {
    background: string;
    backgroundSidePanel: string;
    backgroundHorizontalPanel: string;
    foreground: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    background: "#FFF",
    backgroundSidePanel: "#EEE",
    backgroundHorizontalPanel: "#CCC",
    foreground: "#000",
  },
};

export const DarkTheme: Theme = {
  colors: {
    background: "#333333",
    backgroundSidePanel: "#444444",
    backgroundHorizontalPanel: "#222222",
    foreground: "#FFF",
  },
};
