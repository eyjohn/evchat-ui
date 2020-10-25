import ChannelManager from "./channelManager";
import Channel from "../types/channel";

test("starts empty", () => {
  const mgr = new ChannelManager();
  expect(mgr.channels()).toEqual([]);
});

test("join and switch to channel", () => {
  const mgr = new ChannelManager();
  mgr.join("channel");
  expect(mgr.channels()).toEqual([new Channel("channel", true)]);
  expect(mgr.active()).toEqual("channel");
});

test("leave channel", () => {
  const mgr = new ChannelManager();
  mgr.join("channel");
  mgr.leave("channel");
  expect(mgr.channels()).toEqual([]);
  expect(mgr.active()).toBeNull();
});

test("switch channel", () => {
  const mgr = new ChannelManager();
  mgr.join("channel1");
  mgr.join("channel2");
  mgr.switch("channel1");
  expect(mgr.channels()).toEqual([
    new Channel("channel1", true),
    new Channel("channel2", false),
  ]);
  expect(mgr.active()).toEqual("channel1");
});

test("leave channel and switch to first", () => {
  const mgr = new ChannelManager();
  mgr.join("channel1");
  mgr.join("channel2");
  mgr.leave("channel2");
  expect(mgr.channels()).toEqual([new Channel("channel1", true)]);
});
