import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ExplanationPanel from "./components/ExplanationPanel";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AuthComponent from "./components/AuthComponent";
import LanguageSelector from "./components/LanguageSelector";
import { explainCodeWithHF } from "./services/explainCode";

// import { explainCodeWithOpenAI } from "./services/explainCode";
export default function App() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [language, setLanguage] = useState("python");

  const explainCode = async () => {
    setExplanation("Generating explanation...");
    try {
      const result = await explainCodeWithHF(code, language);
      setExplanation(result);
    } catch (err) {
      setExplanation("Error generating explanation. Check console.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img
            src="assets/icon.svg"
            alt="AI Code Explainer Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">AI Code Explainer</h1>
        </div>
        <div className="flex gap-4 items-center">
          <AuthComponent />
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <ThemeSwitcher />
        </div>
      </div>
      <CodeEditor code={code} setCode={setCode} language={language} />
      <button
        onClick={explainCode}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Explain Code
      </button>
      <ExplanationPanel explanation={explanation} />
    </div>
  );
}
