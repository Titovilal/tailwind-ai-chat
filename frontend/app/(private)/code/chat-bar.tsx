import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitQuestion } from "@/lib/data-code";

const ChatBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion("123", "Question", "<div>Hello</div>");
  };
  return (
    <form
      className="flex overflow-hidden rounded-lg border bg-red-400"
      onSubmit={handleSubmit}
    >
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="resize-none focus-visible:ring-0 border-none focus-visible:ring-offset-0"
      />
      <button className="mt-auto p-2 group border">
        <SendHorizonal className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
      </button>
    </form>
  );
};

export default ChatBar;
