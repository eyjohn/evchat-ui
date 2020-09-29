import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Participants from "./Participants";
import Channels from "./Channels";

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainBody = styled.div`
  display: flex;
  flex: 1;
`;

const Container: React.FC = (props) => {
  return (
    <StyledContainer>
      <Header />
      <MainBody>
        <Channels />
        <Messages />
        {/* <MessageInput /> */}
        <Participants />
      </MainBody>
      <Footer />
    </StyledContainer>
  );
};

export default Container;
