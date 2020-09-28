import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Participants from "./Participants";
import Sidebar from "./Sidebar";

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainBody = styled.div`
  display: flex;
  flex: 1;
`;

//https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
const Container: React.FC = (props) => {
  return (
    <StyledContainer>
      <Header />
      <MainBody>
        <Sidebar />
        <Messages />
        {/* <MessageInput /> */}
        <Participants />
      </MainBody>
      <Footer />
    </StyledContainer>
  );
};

export default Container;
