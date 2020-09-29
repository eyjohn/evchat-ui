import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import Participants from "./components/Participants";
import Channels from "./components/Channels";

const OuterContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
  flex: 1;
`;

const Layout: React.FC = () => {
  return (
    <OuterContainer>
      <Header />
      <InnerContainer>
        <Aside>
          <Channels />
        </Aside>
        <Main>
          <Messages />
          <MessageInput />
        </Main>
        <Aside>
          <Participants />
        </Aside>
      </InnerContainer>
      <Footer />
    </OuterContainer>
  );
};

export default Layout;
