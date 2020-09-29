import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 10px;
  flex: 1;
`;

const Component: React.FC = (props) => {
  return <Styled>Messages</Styled>;
};
export default Component;
