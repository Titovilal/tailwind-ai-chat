"use client";
import React from "react";
import CodeEditor from "../code/code-editor";
import AuthButton from "@/components/auth-button";

export default function TestPage() {
  return (
    <div className="h-screen p-4 ">
      <CodeEditor />

      <AuthButton />
    </div>
  );
}
