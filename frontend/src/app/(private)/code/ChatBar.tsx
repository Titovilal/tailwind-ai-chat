const ChatBar = () => {
  return (
    <div className="flex h-12 w-full bg-base rounded-xl">
      <div className="w-full px-2">
        <textarea className="outline-none bg-sbase resize-none w-full text-sm text-neutral"></textarea>
      </div>

      <button
        type="button"
        className="text-white bg-primary hover:bg-gray-900 focus:outline-none rounded-xl px-2 items-center flex"
      >
        Dark
      </button>
    </div>
  );
};

export default ChatBar;
