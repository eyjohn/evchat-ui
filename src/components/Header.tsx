import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const Styled = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundHorizontalPanel};
`;
const Logo = styled.img`
  width: 2em;
`;

const Component: React.FC = (props) => {
  return (
    <Styled>
      <Logo src={logo} alt="EvChat Logo" />
      Header
    </Styled>
  );
};
export default Component;
