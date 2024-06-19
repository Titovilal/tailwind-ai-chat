// components/Chat.js
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";
import MessageAiSkeleton from "./message-ai-skeleton";
import { useChat } from "@/lib/useChat";
import { useEffect, useRef, useState } from "react";

type ChatProps = {
  accountName: string;
  setCode: (code: string) => void;
  code: string;
};

const Chat = ({ accountName, setCode, code }: ChatProps) => {
 
  const { chatId, chatHistory, isLoading, sendQuestion, resetChat, scrollRef, highlighted, setHighlighted } =
    useChat();

  const sendQuestionBar = async (question: string, withCode: boolean) => {
    const response_code = await sendQuestion(chatId, question, code, withCode);
    setCode(response_code || "");
  };

  useEffect(() => {
    for (const qa of chatHistory) {
      if (qa.answer?.id === highlighted) {
        setCode(qa.answer.code);
      }
    }
  }, [highlighted]);

  return (
    <div className="grid grid-rows-[1fr,auto] h-full pb-2 pt-2">
      <ScrollArea className="px-2" ref={scrollRef}>
        {chatHistory.map((qa) => (
          <div key={qa.id}>
            {qa.question && (
              <MessageUser user={accountName} message={qa.question.question} />
            )}
            {qa.answer && (
              <MessageAi
                messageId={qa.id || ""}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
                message={qa.answer.explanation}
              />
            )}
          </div>
        ))}
        {isLoading && <MessageAiSkeleton />}
      </ScrollArea>
      <ChatBar
        sendQuestionBar={sendQuestionBar}
        resetChat={resetChat}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Chat;
