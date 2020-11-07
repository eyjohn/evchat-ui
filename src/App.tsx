import React from "react";
import DynamicNamedThemeProvider from "./DynamicNamedThemeProvider";
import GlobalStyle from "./GlobalStyle";
// import "semantic-ui-css/semantic.min.css";
import "./assets/semantic.cyborg.min.css";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import Participants from "./components/Participants";
import Channels from "./components/Channels";

import ChannelManager from "./lib/channelManager";

let channelManager = new ChannelManager();

const App: React.FC = () => {
  return (
    <DynamicNamedThemeProvider>
      <GlobalStyle />
      <Layout
        header={<Header />}
        footer={<Footer />}
        messages={<Messages />}
        messageInput={<MessageInput />}
        participants={<Participants />}
        channels={<Channels channelManager={channelManager} />}
      />
    </DynamicNamedThemeProvider>
  );
};

export default App;
