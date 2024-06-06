// components/Chat.js
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";
import MessageAiSkeleton from "./message-ai-skeleton";
import { useChat } from "@/hooks/useChat";
import { useEffect, useRef, useState } from "react";

type ChatProps = {
  accountName: string;
  setCode: (code: string) => void;
};

const Chat = ({ accountName, setCode }: ChatProps) => {
  const [highlighted, setHighlighted] = useState<string>("");
  const { chatHistory, isLoading, sendQuestion, resetChat, scrollRef } =
    useChat();

   

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
        sendQuestion={sendQuestion}
        resetChat={resetChat}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Chat;
