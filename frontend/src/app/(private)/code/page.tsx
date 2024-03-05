"use client";
import React, { useState } from "react";
import Chat from "@/app/(private)/code/Chat";
import CodeEditor from "@/app/(private)/code/CodeEditor";
import Renderer from "@/app/(private)/code/Renderer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
export default function CodePage() {

  const [postContent, setPostContent] = useState<string>('');
  return (
    <>
      <PanelGroup direction="horizontal">

        <Panel minSize={0} defaultSize={60}>
          <PanelGroup direction="vertical">

            <Panel minSize={6}>
              <CodeEditor postContent={postContent} setPostContent={setPostContent}/>
            </Panel>

            <PanelResizeHandle className="bg-base h-4"/>

            <Panel minSize={6} >
              <Chat />
            </Panel>

          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="bg-base w-4"/>

        <Panel defaultSize={40}>
          <Renderer postContent={postContent}/>
        </Panel>

      </PanelGroup>
    </>
  );
}
