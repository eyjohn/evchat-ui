import React from "react";
import styled from "styled-components";

const Styled = styled.footer`
  background-color: ${(props) => props.theme.colors.backgroundHorizontalPanel};
`;

const Component: React.FC = (props) => {
  return <Styled>Footer</Styled>;
};
export default Component;
