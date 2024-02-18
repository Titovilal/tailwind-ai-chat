import { useState } from "react";

interface CodeEditorProps{
    postContent?: string;
    setPostContent?: (arg0: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({postContent,setPostContent}) => {

    return (
        <>
        <div className="bg-blue-500">CodeEditor</div>
        <textarea className="bg-gray-400 text-black px-4 py-2 w-full h-full resize-none" 
        value={postContent}   onChange={e => setPostContent ? setPostContent(e.target.value) : undefined}
        />   
        </>
    );
}
export default CodeEditor;