"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { submitQuestion } from "@/lib/data-code";
import MessageAi from "../code/message-ai";
import MessageAiSkeleton from "../code/message-ai-skeleton";
import CodeEditor from "../code/code-editor";

export default function TestPage() {
  return (
    <div className="h-screen p-4 ">
      <CodeEditorTest />
    </div>
  );
}

const CodeEditorTest = () => {
  return (
    <section className="h-full p-4 rounded-md border">
      <CodeEditor />
    </section>
  );
};

const submitQUestionTest = () => {
  const [question, setQuestion] = React.useState("");
  const handleSubmit = async () => {
    await submitQuestion("5", question, "<div>Hello</div>");
  };
  return (
    <section className="w-64 p-4 rounded-md border space-y-4">
      <Input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button onClick={handleSubmit}>Send</Button>
    </section>
  );
};

const Skeleton = () => {
  return (
    <section className="w-[400px] flex relative p-4 border rouneded-md ">
      <div className=" absolute opacity-50">
        <MessageAi
          message={
            "¡Claro! La inteligencia artificial está transformando múltiples industrias, desde la medicina hasta la educación."
          }
        />
      </div>
      <div className="w-full">
        <MessageAiSkeleton />
      </div>
    </section>
  );
};
