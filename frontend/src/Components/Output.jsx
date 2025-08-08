import React from "react";

/**
 * Displays the complexity analysis results or a loading indicator.
 * @param {object} props
 * @param {string} props.output - The analysis text to display.
 * @param {boolean} props.isLoading - Whether the analysis is in progress.
 */
/*
const Output = ({ output, isLoading }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg h-full p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4 flex-shrink-0">
        Complexity Analysis
      </h2>
      <div className="bg-slate-900 rounded-md p-4 flex-grow overflow-y-auto text-slate-300 font-mono">
        {isLoading ? (
          // Display a loading spinner when isLoading is true
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
          </div>
        ) : (
          // Display the output text, or a placeholder if the output is empty
          <pre className="whitespace-pre-wrap">
            {output || "// Analysis results will appear here..."}
          </pre>
        )}
      </div>
    </div>
  );
};

export default Output;*/
const Output = ({ output, isLoading, title }) => {
  return (
    <div className="bg-slate-900 rounded-md flex-1 overflow-auto p-4 border border-slate-700 text-sm text-slate-300 whitespace-pre-wrap">
      <h2 className="text-emerald-400 font-semibold mb-2">
        {title || "Output"}
      </h2>
      {isLoading ? <p>Loading...</p> : <pre>{output}</pre>}
    </div>
  );
};

export default Output;
