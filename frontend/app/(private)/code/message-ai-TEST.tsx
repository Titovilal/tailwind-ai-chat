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
const MeesageAi: FC<ChatMessageProps> = ({ message }) => {
  return (
    <div aria-label="Chat message" className="group my-4">
      <div aria-label="Message column" className="">
       <div className="mb-1.5 flex gap-2 items-center">
       <Badge aria-label="Agent" className="">
          Agent
        </Badge>
        <span
          aria-label="Action bar"
          className="flex opacity-0 group-hover:opacity-100"
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
        <p
          aria-label="Content"
          className="text-sm text-foreground tracking-tight"
        >
          {message}
        </p>

      
      </div>
    </div>
  );
};
export default MeesageAi;
