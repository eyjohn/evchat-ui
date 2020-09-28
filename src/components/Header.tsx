import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";

const Styled = styled.header``;

const Component: React.FC = (props) => {
  return (
    <Styled>
      <img src={logo} className="App-logo" alt="logo" />
    </Styled>
  );
};
export default Component;
