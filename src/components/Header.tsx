import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

import logo from "../assets/logo.svg";

const Styled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 240px;
  background-color: ${({ theme }) => theme.colors.backgroundHorizontalPanel};
`;
const Logo = styled.img`
  width: 2em;
  vertical-align: middle;
`;

const Component: React.FC = (props) => {
  return (
    <Styled>
      <div>
        <Logo src={logo} alt="EvChat Logo" /> Header
      </div>
      <ThemeToggle />
    </Styled>
  );
};
export default Component;
