import Message from "../types/message";
import User from "../types/user";
class MessageManager {

  constructor(private messages: Array<Message>, private identity: User) {
      this.messages.push(new Message(1, "hello", new User("evgeny", "Evgeny Yakimov")));

  }

  post(channelName: string): void {
    this.#channels.set(channelName, new Channel(channelName));
    this.switch(channelName);
  }

  leave(channelName: string): void {
    this.#channels.delete(channelName);
    if (this.#active === channelName) {
      if (this.#channels.size === 0) {
        this.#active = null;
      } else {
        const firstChannel = this.#channels.values().next().value;
        firstChannel.active = true;
        this.#active = firstChannel.name;
      }
    }
  }

  switch(channelName: string): void {
    this.#channels.forEach((val) => {
      val.active = false;
    });
    const channel = this.#channels.get(channelName);
    if (channel) {
      channel.active = true;
      this.#active = channel.name;
    }
  }

  channels(): Array<Channel> {
    return Array.from(this.#channels.values());
  }

  active(): string | null {
    return this.#active;
  }
}

export default MessageManager;
