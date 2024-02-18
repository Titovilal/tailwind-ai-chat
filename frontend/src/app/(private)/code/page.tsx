"use client";
import React, { useState } from "react";
import Chat from "@/components/private/Chat";
import CodeEditor from "@/components/private/CodeEditor";
import Renderer from "@/components/private/Renderer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
export default function CodePage() {

  const [postContent, setPostContent] = useState<string>('');
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel minSize={4}>
          <PanelGroup direction="vertical">
            <Panel minSize={4}>
              <CodeEditor postContent={postContent} setPostContent={setPostContent}/>
            </Panel>
            <div style={{ backgroundColor: "black", height: "0.1rem" }} />
            <PanelResizeHandle />
            <Panel minSize={4}>
              <Chat />
            </Panel>
          </PanelGroup>
        </Panel>

        <div style={{ backgroundColor: "black", width: "0.1rem" }} />
        <PanelResizeHandle />

        <Panel>
          <Renderer postContent={postContent}/>
        </Panel>
      </PanelGroup>
    </>
  );
}
