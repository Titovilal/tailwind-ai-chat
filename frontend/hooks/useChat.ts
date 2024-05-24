import { useEffect, useState } from "react";
import { submitQuestion } from "@/lib/data-code";

export const useChat = () => {
  const [chatHistory, setChatHistory] = useState<QA[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    resetChat();
  }, []);

  const resetChat = () => {
    setChatHistory([]);
  };

  const addQuestionToChat = (question: string) => {
    let newQA: QA = {
      id: "NEW",
      question: {
        question: question,
      },
      created_at: new Date(),
    };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newQA]);
  };

  const addAnswerToChat = (answer: AIMessage) => {
    setChatHistory((prevChatHistory) => {
      return prevChatHistory.map((item) => {
        if (item.id === "NEW") {
          return {
            ...item,
            id: answer.id,
            answer: answer,
          };
        } else {
          return item;
        }
      });
    });
  };

  const sendQuestion = async (question: string) => {
    if (question === "") return;
    addQuestionToChat(question);
    setIsLoading(true);
    let data = await submitQuestion("5", question, "este es el codigo");
    console.log(data);
    if (data != null) {
      setIsLoading(false);
      addAnswerToChat(data);
    }
  };

  return {
    chatHistory,
    isLoading,
    sendQuestion,
    resetChat,
  };
};
