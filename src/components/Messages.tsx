import React from "react";
import styled from "styled-components";

const Styled = styled.main`
  flex: 1;
`;

const Component: React.FC = (props) => {
  return <Styled>Messages</Styled>;
};
export default Component;
