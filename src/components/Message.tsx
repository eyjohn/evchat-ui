import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundHorizontalPanel}; ;
`;

const Component: React.FC = (props) => {
  return <Styled>MessageInput</Styled>;
};
export default Component;
