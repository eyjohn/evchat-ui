import React, { useContext } from "react";

import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../DynamicNamedThemeProvider";

const Component: React.FC = () => {
  const context = useContext(ThemeContext);
  function onClick(event: any) {
    context.setThemeByName(context.themeName === "light" ? "dark" : "light");
  }

  const button =
    context.themeName === "light" ? (
      <IoMdMoon cursor="pointer" onClick={onClick} />
    ) : (
      <IoMdSunny cursor="pointer" onClick={onClick} />
    );

  return <div style={{ userSelect: "none" }}>{button}</div>;
};
export default Component;
