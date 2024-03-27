import IconButton from "@/components/IconButton";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-primary flex flex-col justify-start items-center p-2 gap-4">
      <Link href="/code">
        <IconButton icon="code" />
      </Link>
      <Link href="/chats">
        <IconButton icon="chat" />
      </Link>
    </div>
  );
};
export default Sidebar;
