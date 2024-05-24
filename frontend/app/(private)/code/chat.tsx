// components/Chat.js
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";
import MessageAiSkeleton from "./message-ai-skeleton";
import { useChat } from "@/hooks/useChat";
import { useEffect, useRef } from "react";

/*
  Chat

  Gestiona el comportamiento de la barra de chat.
*/

type ChatProps = {
  accountName: string;
  isLoading: boolean;
  chatHistory: QA[];
  sendQuestion: (question: string) => void;
  resetChat: () => void;
};

const Chat = ({
  accountName,
  isLoading,
  chatHistory,
  sendQuestion,
  resetChat,
}: ChatProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="grid grid-rows-[1fr,auto] h-full px-4 pb-2 pt-1">
      <ScrollArea className="pr-4" ref={scrollRef}>
        {chatHistory.map((qa) => (
          <div key={qa.id}>
            {qa.question && (
              <MessageUser user={accountName} message={qa.question.question} />
            )}
            {qa.answer && <MessageAi message={qa.answer.explanation} />}
          </div>
        ))}
        {isLoading && <MessageAiSkeleton />}
      </ScrollArea>
      <ChatBar
        sendQuestion={sendQuestion}
        resetChat={resetChat}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Chat;
