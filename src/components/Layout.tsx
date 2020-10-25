import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 880px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Aside = styled.aside`
  flex: 0 0 240px;
  background-color: ${({ theme }) => theme.colors.backgroundSidePanel};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 400px;
`;

export type Props = {
  header: any;
  channels: any;
  messages: any;
  messageInput: any;
  participants: any;
  footer: any;
};

const Layout: React.FC<Props> = ({
  header,
  channels,
  messages,
  messageInput,
  participants,
  footer,
}) => {
  return (
    <OuterContainer>
      {header}
      <InnerContainer>
        <Aside>{channels}</Aside>
        <Main>
          {messages}
          {messageInput}
        </Main>
        <Aside>{participants}</Aside>
      </InnerContainer>
      {footer}
    </OuterContainer>
  );
};

export default Layout;
