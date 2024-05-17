import { Textarea } from "@/components/ui/textarea";

interface CodeEditorProps {
  postContent?: string;
  setPostContent?: (arg0: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  postContent,
  setPostContent,
}) => {
  return (
    <div className="px-4 pb-4 pt-2 grid grid-rows-[2rem,1fr] h-full">
      <h2 className="font-semibold flex justify-center tracking-tight">Code</h2>
      <Textarea
        className="resize-none border focus-visible:ring-0  focus-visible:ring-offset-0 focus-within:ring-1 focus-within:ring-ring "
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
