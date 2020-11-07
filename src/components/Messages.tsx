import React from "react";
import styled from "styled-components";

import { Comment, Segment } from "semantic-ui-react";

const Styled = styled.div`
  padding: 10px;
  flex: 1;
`;

const Component: React.FC = (props) => {
  return (
    <Styled>
      <Segment>
        <Comment.Group >
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    </Styled>
  );
};
export default Component;
