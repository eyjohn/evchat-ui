import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

const Component: React.FC = (props) => {
  return (
    <Form>
      <Input fluid action>
        <input />
        <Button icon="send"></Button>
      </Input>
    </Form>
  );
};
export default Component;
