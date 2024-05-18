import { MessageCirclePlus, SendHorizonal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ChatBar = ({
  onSubmit,
  onClear,
}: {
  onSubmit: (question: string) => void;
  onClear: () => void;
}) => {
  const [question, setQuestion] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && event.shiftKey) {
      // Inserta un salto de línea cuando se presiona Control + Enter
      setQuestion((prevQuestion) => prevQuestion + "\n");
      event.preventDefault();
    } else if (event.key === "Enter") {
      // Envía el mensaje cuando se presiona Enter
      handleSubmit();
      event.preventDefault();
    } else if (event.ctrlKey && event.key === "l") {
      onClear();
      event.preventDefault();
    }
  };
  const handleSubmit = () => {
    onSubmit(question);
    setQuestion("");
  };

  return (
    <div className="mt-2 flex overflow-hidden rounded-lg border focus-visible:ring-offset-0 focus-within:ring-1 focus-within:ring-ring">
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 z-20"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="grid">
        <button className="p-2 group focus:outline-none" onClick={onClear}>
          <MessageCirclePlus className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
        </button>
        <button className="p-2 group focus:outline-none" onClick={handleSubmit}>
          <SendHorizonal className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
