import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bot,
  Code,
  DownloadCloud,
  FlaskConical,
  History,
  Home,
  LogOut,
  MessageCircleQuestion,
  Settings,
} from "lucide-react";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="flex flex-col justify-between items-center bg-background border-r pt-2 pb-4">
      <section className="grid gap-4">
        <Link
          href="/"
          className="group flex h-9 w-9 items-center justify-center rounded-lg text-background bg-primary transition-colors"
        >
          <Bot className="h-5 w-5 group-hover:scale-110" />
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="code"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">Code</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Code</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="history"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <History className="h-5 w-5" />
              <span className="sr-only">History</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">History</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="questions"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircleQuestion className="h-5 w-5" />
              <span className="sr-only">Questions</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Questions</TooltipContent>
        </Tooltip>
      </section>

      <section className="grid gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="test"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <FlaskConical className="h-5 w-5" />
              <span className="sr-only">Test</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Test</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="login"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Logout</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </section>
    </nav>
  );
};

export default MainNav;
