import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Copy,
  CornerDownLeft,
  Eye,
  MessageCircleQuestion,
  ThumbsDown,
  ThumbsUp,
  View,
} from "lucide-react";
import React, { FC } from "react";

interface MessageAiProps {
  message: string;
  messageId: string;
  highlighted?: string;
  setHighlighted: (highlighted: string) => void;
}
const MessageAi: FC<MessageAiProps> = ({ message, highlighted, messageId, setHighlighted }) => {
  return (
    <div aria-label="Chat message" className={`p-2 group rounded-xl ${highlighted === messageId ? 'bg-primary/10' : ''}`}>
      <div className="flex items-center gap-4 mb-2 ">
      <Badge aria-label="Agent" className="">
        Agent
      </Badge>
      <span
        aria-label="Action bar"
        className={`flex opacity-0 group-hover:opacity-100 && ${highlighted === messageId ? 'opacity-100' : 'opacity-0'}`}
      >
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <Copy className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            Copy explanation
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <ThumbsUp className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            This is helpful
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <ThumbsDown className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            This is not helpful
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <Eye className={`size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer ${highlighted === messageId ? 'text-primary' : ''}`} 
            onClick={() => setHighlighted(messageId)} />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            Continue from here
          </TooltipContent>
        </Tooltip>
      </span>
      </div>
     
      <p
        aria-label="Content"
        className="text-sm text-foreground tracking-tight"
      >
        {message}
      </p>

     
    </div>
  );
};
export default MessageAi;
