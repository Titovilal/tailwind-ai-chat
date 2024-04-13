import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import ChatMessage from "./chat-message";

const Chat = () => {
  return (
    <div className="grid grid-rows-[1fr,auto] h-full">
      <ScrollArea className="overflow-auto px-4">
        {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12].map((i) => (
          <div key={i}>
            <ChatMessage
              is_user={i % 2 == 0}
              user={`${i % 2 == 1 ? "Agent" : "User"}`}
              message={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Voluptatem doloremque fugit ratione quibusdam dolores " +
                "quam quidem nisi illo, odit asperiores accusantium " +
                "doloremque quod."
              }
              avatar_path={`https://avatars.dicebear.com/api/human.svg`}
            />
            <div className="h-4"></div>
          </div>
        ))}
      </ScrollArea>
      <ChatBar />
    </div>
  );
};
export default Chat;
