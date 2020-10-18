import React from "react";
import styled from "styled-components";

import Channel from "./Channel";

const Styled = styled.div`
  padding: 10px;
`;

const Join = styled.input`
  font-size: 1em;
  /* width: 200px;
  padding: 10px; */
`;

const Component: React.FC = (props) => {
  return <Styled>
    <Channel></Channel>
    <Channel></Channel>
    <Join placeholder="Join Room"></Join>
    <button>Foo</button>
  </Styled>;
};
export default Component;
