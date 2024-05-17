import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ChatBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      className="flex overflow-hidden rounded-lg border bg-background"
      onSubmit={handleSubmit}
    >
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="resize-none focus-visible:ring-0 border-none focus-visible:ring-offset-0"
      />
      <Button
        size="icon"
        variant="ghost"
        className="mt-auto mb-2 mr-2 group focus:outline-none hover:bg-background"
      >
        <SendHorizonal className="h-5 w-5 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
      </Button>
    </form>
  );
};

export default ChatBar;
