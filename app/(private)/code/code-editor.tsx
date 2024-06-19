import { editor } from "monaco-editor";
import { Monaco, Editor } from "@monaco-editor/react";
import { useState } from "react";

type CodeEditorProps = {
  code?: string;
};

const CodeEditor = ({  }: CodeEditorProps) => {
  const [code, setCode] = useState<string>("");
  const handleMount = (
    _editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    monaco.languages.registerCompletionItemProvider("html", {
      triggerCharacters: [">"],
      provideCompletionItems: (model, position) => {
        const codePre: string = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        });

        const tag = codePre.match(/.*<(\w+)>$/)?.[1];
        if (!tag) return;

        const word = model.getWordUntilPosition(position);

        return {
          suggestions: [
            {
              label: `</${tag}>`,
              kind: monaco.languages.CompletionItemKind.EnumMember,
              insertText: `$1</${tag}>`,
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
              },
            },
          ],
        };
      },
    });
  };

  return (
    <Editor
      height={500}
      width={500}
      language="html"
      theme="vs-light"
      value={code}
      onChange={(value) => setCode(value || "")}
      onMount={handleMount}
      options={{
        minimap: { enabled: false },
        autoClosingBrackets: "always",
        autoClosingComments: "always",
        showUnused: true,
        codeLens: true,
        autoIndent: "full",
        tabCompletion: "on",
        inlayHints: {
          enabled: "on",
        },
        bracketPairColorization: {
          enabled: true,
        },
      }}
    />
  );
};

export default CodeEditor;
