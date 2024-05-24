import { MessageCirclePlus, SendHorizonal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/*
  ChatBar

  Gestiona los eventos de teclado para la barra de chat:
  Ctrl + K: Limpia la barra de chat.
  Mayus + Enter: Añade un salto de linea.
  Enter: Envia el texto al componente padre.
*/

type ChatBarProps = {
  sendQuestion: (question: string) => void;
  resetChat: () => void;
  isLoading: boolean;
};

const ChatBar = ({ sendQuestion, resetChat, isLoading }: ChatBarProps) => {
  const [question, setQuestion] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setQuestion((prevQuestion) => prevQuestion + "\n");
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (isLoading) return;
      handleSubmit();
    } else if (event.ctrlKey && event.key === "k") {
      resetChat();
      event.preventDefault();
    }
  };

  const cleanBar = () => {
    setQuestion("");
  };

  const handleSubmit = () => {
    sendQuestion(question);
    cleanBar();
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
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <button
              className="p-2 group focus:outline-none"
              onClick={resetChat}
            >
              <MessageCirclePlus className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            New chat
          </TooltipContent>
        </Tooltip>

        <button className="p-2 group focus:outline-none" onClick={handleSubmit}>
          <SendHorizonal className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
