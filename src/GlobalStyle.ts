import { createGlobalStyle } from "styled-components";
import hexRgb from "hex-rgb";

function applyAlpha(baseColor: string, alpha: number): string {
  let baseRgb = hexRgb(baseColor, { format: "array" }).slice(0, 3);
  return `rgba(${baseRgb[0]},${baseRgb[1]},${baseRgb[2]},${alpha})`;
}

export default createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.foreground};
  background-color: ${({ theme }) => theme.colors.background};
}

a {
  padding-bottom: 1px;
  color:  ${({ theme }) => theme.colors.link};
  text-decoration: none;
}
a:focus,
a:active,
a:hover {
  color: ${({ theme }) => theme.colors.linkActive};
  text-decoration: underline;
}

// Semantic UI overrides
main .ui.comments .comment .author,
main .ui.comments .comment .text {
  color: ${({ theme }) => applyAlpha(theme.colors.foreground, 0.875)};
}

main .ui.comments .comment .metadata {
  color: ${({ theme }) => applyAlpha(theme.colors.foreground, 0.75)};
}

main .ui.comments .comment .actions a {
  color: ${({ theme }) => applyAlpha(theme.colors.foreground, 0.5)};
}

`;
