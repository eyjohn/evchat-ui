import User from "./user";

class Message {
  id: Number = 0;
  body: string = "";
  author: User = new User();
}

export default Message;
