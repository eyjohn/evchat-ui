import React from "react";
import styled from "styled-components";

const Styled = styled.nav`
  flex: 0 0 12em;
  background-color: ${(props) => props.theme.colors.backgroundSidePanel};
`;

const Component: React.FC = (props) => {
  return <Styled>Sidebar</Styled>;
};
export default Component;
