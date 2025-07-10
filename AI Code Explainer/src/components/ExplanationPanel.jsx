import React from "react";

export default function ExplanationPanel({ explanation }) {
  const lines = explanation.split("\n").filter(line => line.trim() !== "");

  return (
    <div className="mt-4 p-4 border border-green-600 bg-green-100 dark:bg-green-900 dark:border-green-400 rounded">
      <h2 className="font-semibold mb-2">Explanation:</h2>
      <ul className="list-disc list-inside space-y-1">
        {lines.map((line, idx) => {
          const match = line.match(/\*\*(.+?)\*\*(.*)/);
          if (match) {
            return (
              <li key={idx}>
                <strong>{match[1]}</strong>{match[2]}
              </li>
            );
          }
          return <li key={idx}>{line}</li>;
        })}
      </ul>
    </div>
  );
}