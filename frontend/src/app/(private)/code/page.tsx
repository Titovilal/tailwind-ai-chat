"use client";
import React, { useState } from "react";
import Chat from "@/app/ui/code/chat-zone";
import CodeEditor from "@/app/ui/code/code-zone";
import Renderer from "@/app/ui/code/render-zone";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
export default function CodePage() {
  const [postContent, setPostContent] = useState<string>("");
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel minSize={0} defaultSize={60}>
          <PanelGroup direction="vertical">
            <Panel minSize={6}>
              <CodeEditor
                postContent={postContent}
                setPostContent={setPostContent}
              />
            </Panel>

            <PanelResizeHandle className="h-4 bg-primary" />

            <Panel minSize={6}>
              <Chat />
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="w-4 bg-primary" />

        <Panel defaultSize={40}>
          <Renderer postContent={postContent} />
        </Panel>
      </PanelGroup>
    </>
  );
}
