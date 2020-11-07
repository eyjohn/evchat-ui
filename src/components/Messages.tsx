import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { CommentGroup } from "semantic-ui-react";
import Message from "./Message";

const Styled = styled.div`
  padding: 10px;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
`;

const Component: React.FC = (props) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  };
  useEffect(scrollToBottom);
  return (
    <Styled>
      <CommentGroup>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </CommentGroup>
      <div ref={messagesEndRef}></div>
    </Styled>
  );
};
export default Component;
