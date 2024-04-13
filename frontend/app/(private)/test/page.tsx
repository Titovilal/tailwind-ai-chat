import Chat from "../code/chat";
import ChatBar from "../code/chat-bar";

export default function TestPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="h-[600px] w-[1000px] p-4 rounded-md">
        <Chat />
      </section>
    </div>
  );
}
