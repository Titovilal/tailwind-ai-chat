"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";
import MessageAiSkeleton from "./message-ai-skeleton";
import { useEffect, useState, useRef } from "react";
import { submitQuestionTest } from "@/lib/data-code";

const Chat = () => {
  const [messagePairs, setMessagePairs] = useState<QA[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar historial
    setUserName("User");
    setMessagePairs([]);
  }, []);

  const createQuestion = (question: string) => {
    let newQA: QA = {
      id: "NEW",
      question: {
        question: question,
      },
      created_at: new Date(),
    };
    setMessagePairs((prevMessagePairs) => [...prevMessagePairs, newQA]);
  };

  const createAnswer = (qa: QA) => {
    setMessagePairs((prevMessagePairs) => {
      return prevMessagePairs.map((item) => {
        if (item.id === "NEW") {
          return {
            ...item,
            id: qa.id,
            answer: qa.answer,
          };
        } else {
          return item;
        }
      });
    });
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo(0, scrollAreaRef.current.scrollHeight);
    }
  };

  const handleSubmit = async (question: string) => {
    if (question === "") return;
    createQuestion(question);
    setLoading(true);
    let data = await submitQuestionTest("5", question, "este es el codigo");
    console.log(data);
    if (data != null) {
      setLoading(false);
      createAnswer(data);
    }
  };

  return (
    <div className="grid grid-rows-[1fr,auto] h-full">
      <ScrollArea className="px-4">
        {messagePairs.map((messagePair) => (
          <div key={messagePair.id}>
            {messagePair.question && (
              <MessageUser
                user={userName}
                message={messagePair.question.question}
              />
            )}
            {messagePair.answer && (
              <MessageAi message={messagePair.answer.explanation} />
            )}
          </div>
        ))}
        {loading && <MessageAiSkeleton />}
      </ScrollArea>
      <ChatBar onSubmit={handleSubmit} onClear={() => setMessagePairs([])} />
    </div>
  );
};
export default Chat;
