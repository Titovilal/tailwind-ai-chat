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
      <h2 className="font-bold flex justify-center">Code Editor</h2>
      <textarea
        className="bg-background focus:border-primary-200 border-primary-300 rounded-xl p-2 text-sm outline-none resize-none flex"
        value={postContent}
        placeholder="Enter your code here..."
        onChange={(e) =>
          setPostContent ? setPostContent(e.target.value) : undefined
        }
      />
    </div>
  );
};
export default CodeEditor;
