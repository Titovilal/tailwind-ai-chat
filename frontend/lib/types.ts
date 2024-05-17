type Account = {
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
  explanation: string;
  code: string;
};

type Chat = {
  id?: string;
  account_id: string;
  created_at: Date;
};

type QA = {
  id?: string;
  question_id: string;
  answer_id: string;
  chat_id: string;
  created_at: Date;
  status: "like" | "dislike" | "reviewed";
  groundtruth: string;
};
