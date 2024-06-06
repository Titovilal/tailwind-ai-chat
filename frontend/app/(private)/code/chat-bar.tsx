import { Code, MessageCirclePlus, Mic, SendHorizonal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";

/*
  ChatBar

  Gestiona los eventos de teclado para la barra de chat:
  Ctrl + K: Limpia la barra de chat.
  Mayus + Enter: Añade un salto de linea.
  Enter: Envia el texto al componente padre.
*/

type ChatBarProps = {
  sendQuestionBar: (question: string, withCode:boolean) => void;
  resetChat: () => void;
  isLoading: boolean;
};

const ChatBar = ({ sendQuestionBar, resetChat, isLoading }: ChatBarProps) => {
  const [question, setQuestion] = useState("");
  const [usingCode, setUsingCode] = useState(false);

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
    sendQuestionBar(question, usingCode);
    cleanBar();
  };

  return (
    <div className="mt-2 mx-2 flex overflow-hidden rounded-lg border focus-visible:ring-offset-0 focus-within:ring-1 focus-within:ring-ring">
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 z-20"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex items-center gap-1">
        <div className="grid">
          <Tooltip>
            <TooltipTrigger asChild className="focus:outline-none">
              <button className="p-2 group focus:outline-none">
                <Mic className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground">
              Use voice
            </TooltipContent>
          </Tooltip>

          <Toggle className="p-2 group focus:outline-none h-fit w-fit data-[state=on]:bg-primary/10" onClick={() => setUsingCode(!usingCode)} >
            <Code className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
          </Toggle>
        </div>
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

          <button
            className="p-2 group focus:outline-none"
            onClick={handleSubmit}
          >
            <SendHorizonal className="h-4 w-4 group-hover:scale-110 group-hover:text-primary text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
