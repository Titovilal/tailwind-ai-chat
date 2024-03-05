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
      <div className="grid gap-2">
        <label className="font-bold text-neutral text-sm">{user}</label>
        <p className="text-neutral text-sm">{message}</p>
        <div>
          <div className="flex gap-2">
            <button>
              <svg className="text-neutral fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            </button>
            <button>
              <svg className="text-neutral fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            </button>
            <button className="text-neutral">
              <svg
              className="text-neutral fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
