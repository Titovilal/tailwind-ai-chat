"use client";
import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Chat from "./chat";
import CodeEditor from "./code-editor";
import Renderer from "./renderer";
export default function CodePage() {
  const [postContent, setPostContent] = useState<string>("");
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel minSize={0}>
          <PanelGroup direction="vertical">
            <Panel minSize={5} className="border-r  ">
              <CodeEditor
                postContent={postContent}
                setPostContent={setPostContent}
              />
            </Panel>

            <PanelResizeHandle className="h-0 " />

            <Panel minSize={12} className="border-t  border-r ">
              <Chat />
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="w-0 " />

        <Panel>
          <Renderer postContent={postContent} />
        </Panel>
      </PanelGroup>
    </>
  );
}
