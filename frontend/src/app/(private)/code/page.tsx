"use client";
import React from "react";
import Chat from "@/components/private/Chat";
import CodeEditor from "@/components/private/CodeEditor";
import Renderer from "@/components/private/Renderer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function CodePage() {
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <CodeEditor />
            </Panel>
            <div style={{ backgroundColor: "black", height: "0.1rem" }} />
            <PanelResizeHandle />
            <Panel>
              <Chat />
            </Panel>
          </PanelGroup>
        </Panel>

        <div style={{ backgroundColor: "black", width: "0.1rem" }} />
        <PanelResizeHandle />

        <Panel>
          <Renderer />
        </Panel>
      </PanelGroup>
    </>
  );
}
