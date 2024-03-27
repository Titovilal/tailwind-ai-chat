export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
  };
  
export interface Message {
    id: string;
    content: string;
    is_ai: boolean;
  };
  
export interface Chat {
    id: string;
    messages: QA[];
    user: User;
    created_at: Date;
  };
  
export interface QA {
    id: string;
    question: Message;
    answer: Message;
    created_at: Date;
    status: "like" | "dislike" | "reviewed";
    groundtruth: string;
  };