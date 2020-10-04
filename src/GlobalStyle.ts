import { createGlobalStyle } from "styled-components";

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
`;
