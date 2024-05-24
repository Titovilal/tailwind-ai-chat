"use client";
import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Chat from "./chat";
import CodeEditor from "./code";
import Renderer from "./renderer";
import { useChat } from "@/hooks/useChat";
export default function CodePage() {
  const [code, setCode] = useState<string>("");
  const { chatHistory, isLoading, sendQuestion, resetChat } = useChat();
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={50}>
        <PanelGroup direction="vertical">
          <Panel minSize={4} defaultSize={50} className="border-r">
            <CodeEditor postContent={code} setPostContent={setCode} />
          </Panel>

          <PanelResizeHandle className="h-0" />

          <Panel minSize={12} defaultSize={50} className="border-t  border-r ">
            <Chat
              accountName="Tailwind AI"
              chatHistory={chatHistory}
              isLoading={isLoading}
              sendQuestion={sendQuestion}
              resetChat={resetChat}
            />
          </Panel>
        </PanelGroup>
      </Panel>

      <PanelResizeHandle className="w-0 " />

      <Panel defaultSize={50}>
        <Renderer code={code} />
      </Panel>
    </PanelGroup>
  );
}
