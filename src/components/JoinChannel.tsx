import React, { useState } from "react";
import styled from "styled-components";

import { Input, Form } from "semantic-ui-react";

const Styled = styled.div`
  padding: 10px;
`;

interface OnJoin {
  (channel: string): void;
}

export type Props = {
  onJoin: OnJoin;
};

const Component: React.FC<Props> = ({ onJoin }) => {
  let [value, setValue] = useState<string>("");
  function onClick(_: any) {
    if (value) {
      onJoin(value);
      setValue("");
    }
  }

  return (
    <Styled>
      <Form onSubmit={onClick}>
        <Input
          fluid
          value={value}
          label="#"
          action={{ content: "Join", onClick }}
          placeholder="Channel"
          onChange={(e) => setValue(e.target.value)}
        />
      </Form>
    </Styled>
  );
};

export default Component;
