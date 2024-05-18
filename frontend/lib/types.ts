type UserMessage = {
  id?: string;
  question: string;
};

type AIMessage = {
  id?: string;
  explanation: string;
  code: string;
};

type QA = {
  id?: string;
  question?: UserMessage;
  answer?: AIMessage;
  created_at?: Date;
  status?: "like" | "dislike" | "reviewed";
  groundtruth?: string;
};

type Chat = {
  id?: string;
  created_at: Date;
  messages: QA[];
};

type Account = {
  id?: string;
  email: string;
  name: string;
  avatar: string;
  chats?: Chat[];
};
