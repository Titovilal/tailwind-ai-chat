import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Copy,
  CornerDownLeft,
  MessageCircleQuestion,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import React, { FC } from "react";

interface ChatMessageProps {
  message: string;
}
const MessageAi: FC<ChatMessageProps> = ({ message }) => {
  return (
    <div aria-label="Chat message" className="group">
      <div aria-label="Message column" className="mt-1 ">
        <Badge aria-label="Agent" className="mb-1.5 ">
          Agent
        </Badge>
        <p
          aria-label="Content"
          className="text-sm text-foreground tracking-tight"
        >
          {message}
        </p>

        <span
          aria-label="Action bar"
          className="flex mb-2 mt-1 opacity-0 group-hover:opacity-100"
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
              <CornerDownLeft className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground">
              Continue from here
            </TooltipContent>
          </Tooltip>
        </span>
      </div>
    </div>
  );
};
export default MessageAi;
