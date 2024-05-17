"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBar from "./chat-bar";
import MessageAi from "./message-ai";
import MessageUser from "./message-user";

const Chat = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="grid grid-rows-[1fr,auto] h-full">
      <ScrollArea className="px-4"></ScrollArea>
      <ChatBar />
    </div>
  );
};
export default Chat;

// {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12].map((i) => (
//   <div key={i}>
//     <MessageUser
//       user="User"
//       message={
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
//         "Voluptatem doloremque fugit ratione quibusdam dolores " +
//         "quam quidem nisi illo, odit asperiores accusantium " +
//         "doloremque quod."
//       }
//     />
//     <div className="h-2" />
//     <MessageAi
//       message={
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
//         "Voluptatem doloremque fugit ratione quibusdam dolores " +
//         "quam quidem nisi illo, odit asperiores accusantium " +
//         "doloremque quod."
//       }
//     />
//     <div className="h-2" />
//   </div>
// ))}
