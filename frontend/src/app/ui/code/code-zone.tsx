interface CodeEditorProps {
  postContent?: string;
  setPostContent?: (arg0: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  postContent,
  setPostContent,
}) => {
  return (
    <div className="px-4 pb-4 pt-2 grid grid-rows-[2rem,1fr] h-full border">
      <h2 className="font-bold flex justify-center">Code Editor</h2>
      <textarea
        className=" bg-background rounded-xl p-2 text-sm bg-code outline-none resize-none flex"
        value={postContent}
        onChange={(e) =>
          setPostContent ? setPostContent(e.target.value) : undefined
        }
      />
    </div>
  );
};
export default CodeEditor;
