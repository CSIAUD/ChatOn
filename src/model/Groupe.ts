import Message from "@/model/Message";

type Groupe = {
  lastMessage: string;
  unseenNumberMessages: number;
  messages: Array<Message>;
};

export default Groupe;
