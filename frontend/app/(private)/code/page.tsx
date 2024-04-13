"use client";
import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
export default function CodePage() {
  const [postContent, setPostContent] = useState<string>("");
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel minSize={0} defaultSize={60}>
          <PanelGroup direction="vertical">
            <Panel minSize={6} className="border-r border-primary-200">
              <div>a</div>
            </Panel>

            <PanelResizeHandle className="h-0 bg-primary" />

            <Panel minSize={6} className="border-t border-r border-primary-200">
              <div>b</div>
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="w-0 bg-primary" />

        <Panel defaultSize={40}>
          <div>c</div>
        </Panel>
      </PanelGroup>
    </>
  );
}
