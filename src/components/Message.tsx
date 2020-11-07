import React from "react";

import { Comment } from "semantic-ui-react";

const Component: React.FC = (props) => {
  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="span">Matt</Comment.Author>
        <Comment.Metadata>Today at 5:42PM</Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};
export default Component;
