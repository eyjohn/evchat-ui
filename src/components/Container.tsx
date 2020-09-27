import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Container: React.FC = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
