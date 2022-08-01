import User from "./user";

class Message {
  constructor(public id: number = 0, public message: string, public author: User) {}
}

export default Message;
