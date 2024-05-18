import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RendererProps {
  postContent?: string;
}

const tailwind = `<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css');
</style>`;

const Renderer: React.FC<RendererProps> = ({ postContent }) => {
  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  const setTailwindCSS = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <div className="px-4 pb-4 grid grid-rows-[2rem,1fr] h-screen relative">
      <div className="absolute left-4 top-4">
        <Tooltip>
          <TooltipTrigger asChild className="focus:outline-none">
            <RotateCcw className="h-4 w-4 text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-muted-foreground">
            Reset layer
          </TooltipContent>
        </Tooltip>
      </div>

      <ScrollArea className="overflow-auto">
        <div dangerouslySetInnerHTML={setTailwindCSS(tailwind)} />
        {postContent && htmlFrom(postContent)}
      </ScrollArea>
    </div>
  );
};
export default Renderer;
