import {
  CornerDownLeft,
  Mic,
  Paperclip,
  Send,
  SendHorizonal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ChatBar = () => {
  return (
    <>
      <form className="flex overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="resize-none focus-visible:ring-0 border-none focus-visible:ring-offset-0"
        />
        <Button size="icon" className=" mt-auto mb-2 mr-2">
          <SendHorizonal />
        </Button>
      </form>
    </>
  );
};

export default ChatBar;
