import React from "react";

export default function CodeEditor({ code, setCode, language }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="w-full h-64 p-2 font-mono border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-sm"
      placeholder={`Enter your ${language} code here...`}
    />
  );
}
