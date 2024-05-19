// components/Chat.js
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";
import MessageAiSkeleton from "./message-ai-skeleton";
import { useChat } from "@/hooks/useChat";

const Chat = () => {
  const {scrollAreaRef, messagePairs, userName, loading, handleSubmit, setMessagePairs } =
    useChat();

  return (
    <div className="grid grid-rows-[1fr,auto] h-full px-4 pb-2 pt-1">
      <ScrollArea className="pr-4" ref={scrollAreaRef} >
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
      <ChatBar
        onSubmit={handleSubmit}
        onClear={() => setMessagePairs([])}
        loading={loading}
      />
    </div>
  );
};

export default Chat;
