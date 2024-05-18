"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { submitQuestion } from "@/lib/data-code";
import MessageAi from "../code/message-ai";
import MessageAiSkeleton from "../code/message-ai-skeleton";

export default function TestPage() {
  const [question, setQuestion] = React.useState("");
  const handleSubmit = async () => {
    await submitQuestion("5", question, "<div>Hello</div>");
  };
  return (
    <div className="flex h-screen gap-4 p-4 ">
      <section className="w-64 p-4 rounded-md border space-y-4">
        <Input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </section>
      <section className="w-[900px] flex relative p-4 border rouneded-md ">
        <div className="w-full absolute opacity-50">
          {" "}
          <MessageAi
            message={
              "¡Claro! La inteligencia artificial está transformando múltiples industrias, desde la medicina hasta la educación, mejorando la eficiencia y personalización. Sin embargo, plantea desafíos éticos y de privacidad que deben ser cuidadosamente gestionados."
            }
          />
        </div>
        <div className="w-full">
          <MessageAiSkeleton />
        </div>
      </section>
    </div>
  );
}
