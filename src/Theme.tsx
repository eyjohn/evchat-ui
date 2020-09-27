export interface Theme {
  backgroundColor: string;
  color: string;
}

export const LightTheme: Theme = {
  backgroundColor: "#FFF",
  color: "#000",
};

export const DarkTheme: Theme = {
  ...LightTheme,
  backgroundColor: "#282828",
  color: "#FFF",
};
