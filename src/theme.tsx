export interface Theme {
  colors: {
    background: string;
    backgroundSidePanel: string;
    backgroundHorizontalPanel: string;
    foreground: string;
    link: string;
    linkActive: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    background: "#FFF",
    backgroundSidePanel: "#EEE",
    backgroundHorizontalPanel: "#DDD",
    foreground: "#000",
    link: "#666",
    linkActive: "#444",
  },
};

export const DarkTheme: Theme = {
  colors: {
    background: "#333",
    backgroundSidePanel: "#444",
    backgroundHorizontalPanel: "#222",
    foreground: "#FFF",
    link: "#BBB",
    linkActive: "#DDD",
  },
};

export const ThemeMap: Map<string, Theme> = new Map([
  ["dark", DarkTheme],
  ["light", LightTheme],
]);
