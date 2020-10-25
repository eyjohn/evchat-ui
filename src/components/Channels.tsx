import React, { useState } from "react";
import styled from "styled-components";
import ChannelComponent from "./Channel";
import JoinChannel from "./JoinChannel";
import ChannelManager from "../lib/channelManager";
import Channel from "../types/channel";

const Styled = styled.div``;

export type Props = {
  channelManager: ChannelManager;
};

const Component: React.FC<Props> = ({ channelManager }) => {
  let [channels, setChannels] = useState<Array<Channel>>(
    channelManager.channels()
  );

  function onJoin(channelName: string) {
    channelManager.join(channelName);
    setChannels(channelManager.channels());
  }

  function onSwitch(channelName: string) {
    channelManager.switch(channelName);
    setChannels(channelManager.channels());
  }

  function onClose(channelName: string) {
    channelManager.leave(channelName);
    setChannels(channelManager.channels());
  }
  return (
    <Styled>
      {channels.map((channel, key) => (
        <ChannelComponent
          key={key}
          name={channel.name}
          active={channel.active}
          onClick={onSwitch}
          onClose={onClose}
        ></ChannelComponent>
      ))}
      <JoinChannel onJoin={onJoin}></JoinChannel>
    </Styled>
  );
};
export default Component;
