import ChatBar from "./ChatBar";
import ChatMessage from "./ChatMessage";
const Chat = () => {
  return (
    <div className="bg-sbase px-4 pb-4 pt-2 grid grid-rows-[2rem,1fr] min-h-screen rounded-t-lg">
      <h2 className="text-neutral font-bold flex justify-center">Chat</h2>
      <div>
        <ChatMessage
          user="Copilot"
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aperiam nesciunt accusamus saepe iure quasi amet harum assumenda facere hic laudantium ipsam repudiandae placeat nihil, libero vero dolore, in reiciendis."
          avatar_path="https://imgs.search.brave.com/LjJ3X7NEi3HzlXGPjLV9mN63OvEVtH1bIuxfxy4bHQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/ZXN0aGV0aWMtZGFy/ay13YWxscGFwZXIt/YmFja2dyb3VuZC1u/ZW9uLWxpZ2h0XzUz/ODc2LTEyODI5MS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
        />
        <ChatBar />
      </div>
    </div>
  );
};
export default Chat;
