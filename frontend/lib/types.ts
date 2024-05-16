type User = {
  id?: string;
  email: string;
  name: string;
  avatar: string;
};

type UserMessage = {
  id?: string;
  question: string;
};

type AIMessage = {
  id?: string;
  explanation:string;
  code:string;
};

type Chat = {
  id?: string;
  messages: QA[];
  user: User;
  created_at: Date;
};

type QA = {
  id?: string;
  question: UserMessage;
  answer: AIMessage;
  created_at: Date;
  status: "like" | "dislike" | "reviewed";
  groundtruth: string;
};
