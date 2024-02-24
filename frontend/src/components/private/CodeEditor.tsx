import { useState } from "react";

interface CodeEditorProps {
  postContent?: string;
  setPostContent?: (arg0: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  postContent,
  setPostContent,
}) => {
  return (
    <div className="bg-sbase px-4 pb-4 pt-2 grid grid-rows-[2rem,1fr] h-full rounded-b-lg">
      <h2 className="text-neutral font-bold flex justify-center">
        Code Editor
      </h2>
      <textarea
        className="text-neutral text-sm bg-code outline-none resize-none flex"
        value={postContent}
        onChange={(e) =>
          setPostContent ? setPostContent(e.target.value) : undefined
        }
      />
    </div>
  );
};
export default CodeEditor;
