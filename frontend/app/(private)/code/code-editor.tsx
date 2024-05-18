import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, StepBack, StepForward } from "lucide-react";

interface CodeEditorProps {
  postContent?: string;
  setPostContent?: (arg0: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  postContent,
  setPostContent,
}) => {
  return (
    <div className="px-4 pb-4 grid grid-rows-[2rem,1fr] h-full">
      <span className="flex justify-center items-center text-muted-foreground gap-4">
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <ChevronLeft className="h-4 w-4 hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            Previous generation
          </TooltipContent>
        </Tooltip>
        <h2 className="font-semibold text-muted-foreground">Code</h2>
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <ChevronRight className="h-4 w-4 hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            Next generation
          </TooltipContent>
        </Tooltip>
      </span>
      <Textarea
        className="resize-none border focus-visible:ring-offset-0 focus-within:ring-1 focus-within:ring-ring "
        value={postContent}
        id="message"
        placeholder="Enter your code here..."
        onChange={(e) =>
          setPostContent ? setPostContent(e.target.value) : undefined
        }
      />
    </div>
  );
};
export default CodeEditor;
// {/* <form className="flex overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"> */}
