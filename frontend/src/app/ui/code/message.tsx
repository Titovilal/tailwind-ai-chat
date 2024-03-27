import IconButton from "@/components/IconButton";
import React, { FC } from "react";

interface ChatMessageProps {
  user: string;
  message: string;
  avatar_path: string;
}
const ChatMessage: FC<ChatMessageProps> = ({ user, message, avatar_path }) => {
  return (
    <div className="flex gap-4 p-4">
      <div>
        <img
          className="w-10 h-10 min-w-10 min-h-10 rounded-full"
          src={avatar_path}
        />
      </div>
      <div className="grid gap-2 text-sm">
        <label className="font-bold">{user}</label>
        <p>{message}</p>
        <div>
          <div className="flex gap-2">
            {/* <IconButton className="button-background" icon="thumb_up" />
            <IconButton className="button-background" icon="thumb_down" />
            <IconButton className="button-background" icon="content_copy" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
