"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { submitQuestion } from "@/lib/data-code";

export default function TestPage() {
  const [question, setQuestion] = React.useState("");
  const handleSubmit = async () => {
    try {
      await submitQuestion("5", question, "<div>Hello</div>");
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="h-[400px] w-[400px] p-4 m-4 rounded-md border space-y-4">
        <Input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send</Button>
      </section>
    </div>
  );
}
