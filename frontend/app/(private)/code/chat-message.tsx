import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import React, { FC } from "react";

interface ChatMessageProps {
  user: string;
  message: string;
  avatar_path: string;
  is_user: boolean;
}
const ChatMessage: FC<ChatMessageProps> = ({
  user,
  message,
  avatar_path,
  is_user,
}) => {
  return (
    <div aria-label="Chat message" className="flex gap-2 group">
      <img
        aria-label="Avatar"
        className="h-6 w-6 rounded-full"
        src={avatar_path}
      />

      <div aria-label="Message column" className="mt-1 ">
        <h3
          aria-label="User"
          className="text-md font-semibold tracking-tight leading-none mb-1.5"
        >
          {user}
        </h3>
        <p
          aria-label="Content"
          className="text-sm text-foreground tracking-tight"
        >
          {message}
        </p>

        <span
          aria-label="Action bar"
          className="flex mt-3 opacity-0 group-hover:opacity-100"
        >
          {!is_user && (
            <>
              <ThumbsUp className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
              <ThumbsDown className="size-4 mr-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
            </>
          )}
          <Copy className="size-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
        </span>
      </div>
    </div>
  );
};
export default ChatMessage;
