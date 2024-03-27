export default function ChatBar() {
  return (
    <div className="flex h-12 w-full rounded-xl">
      <div className="w-full px-2">
        <textarea className="outline-none resize-none w-full text-sm"></textarea>
      </div>

      <button
        type="button"
        className="focus:outline-none rounded-xl px-2 items-center flex"
      >
        Dark
      </button>
    </div>
  );
}
