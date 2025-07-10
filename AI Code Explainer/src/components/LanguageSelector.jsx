import React from "react";

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="px-3 py-1 border rounded text-sm dark:text-yellow-900"
    >
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="cpp">C++</option>
    </select>
  );
}
