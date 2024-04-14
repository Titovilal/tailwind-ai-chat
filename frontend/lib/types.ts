type User = {
  id?: string;
  email: string;
  name: string;
  avatar: string;
};

type Message = {
  id?: string;
  content: string;
  is_ai: boolean;
};

type Chat = {
  id?: string;
  messages: QA[];
  user: User;
  created_at: Date;
};

type QA = {
  id?: string;
  question: Message;
  answer: Message;
  created_at: Date;
  status: "like" | "dislike" | "reviewed";
  groundtruth: string;
};
