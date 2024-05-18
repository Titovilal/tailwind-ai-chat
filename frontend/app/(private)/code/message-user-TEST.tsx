import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp, Copy } from "lucide-react";
import React, { FC } from "react";

interface ChatMessageProps {
  user: string;
  message: string;
}
const MeesageUser: FC<ChatMessageProps> = ({ user, message }) => {
  return (
    <div aria-label="Chat message" className="group my-4">
      <div aria-label="Message column" className="">
        <div className="mb-1.5 flex gap-2 items-center">
        <Badge aria-label="User" variant="outline" className="">
          {user}
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
              Copy question
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild className="focus:outline-none">
              <CircleHelp className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground">
              Ask for manual resolution
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
export default MeesageUser;
