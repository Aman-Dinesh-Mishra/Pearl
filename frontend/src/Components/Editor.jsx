import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ language, code, onChange }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full bg-slate-900 text-slate-200 p-4 rounded-lg resize-none font-mono text-sm focus:outline-none border border-slate-700"
    />
  );
};

export default Editor;
