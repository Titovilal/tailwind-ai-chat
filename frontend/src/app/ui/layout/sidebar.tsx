import IconButton from "@/components/IconButton";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-background border-r border-primary-200 flex flex-col justify-between items-center p-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-primary-200">T2C</p>
        <Link href="/code">
          <IconButton
            className="button-background focus:outline-none"
            icon="chat"
          />
        </Link>
        <Link href="/chats">
          <IconButton
            className="button-background focus:outline-none"
            icon="history"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link  href="/sign-up">
          <IconButton
            className="button-background focus:outline-none"
            icon="logout"
          />
        </Link>
        <Link href="/settings">
          <IconButton
            className="button-background focus:outline-none"
            icon="settings"
          />
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
