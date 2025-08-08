import { useState } from "react";
import { languageOptions, languageBoilerplates } from "../utils/constants";
import { fetchOutput, fetchComplexity } from "../utils/api";

import Navbar from "./NavBar";
import LanguageSelector from "./LanguageSelector";
import Editor from "./Editor";
import Output from "./Output";

const EditorPage = ({ onGoHome, onGoEditor }) => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState(languageBoilerplates[language.value]);
  const [output, setOutput] = useState({ complexity: "", execution: "" });
  const [loading, setLoading] = useState({
    complexity: false,
    execution: false,
  });
  const [activeTab, setActiveTab] = useState("complexity");

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setCode(languageBoilerplates[lang.value]);
    setOutput({ complexity: "", execution: "" });
  };

  const handleAction = async (type) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    setOutput((prev) => ({ ...prev, [type]: "" }));
    try {
      const result =
        type === "execution"
          ? await fetchOutput(language.name, code)
          : await fetchComplexity(language.name, code);
      setOutput((prev) => ({ ...prev, [type]: result }));
    } catch {
      setOutput((prev) => ({
        ...prev,
        [type]: `Error during ${
          type === "execution" ? "execution" : "analysis"
        }`,
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans flex flex-col">
      <Navbar onGoHome={onGoHome} onGoEditor={onGoEditor} />

      <main className="flex-grow flex flex-col p-4 lg:p-8">
        <LanguageSelector language={language} onSelect={handleLanguageSelect} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow mt-4">
          <Editor language={language.value} code={code} onChange={setCode} />

          <div className="bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col">
            <div className="border-b border-slate-700 mb-4 flex">
              {["complexity", "execution"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 text-lg font-semibold ${
                    activeTab === tab
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-slate-400"
                  }`}
                >
                  {tab === "complexity" ? "Complexity Analysis" : "Code Output"}
                </button>
              ))}
            </div>

            <Output output={output[activeTab]} isLoading={loading[activeTab]} />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleAction("execution")}
            disabled={loading.execution}
            className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-sky-700 disabled:bg-slate-600 transition-all"
          >
            {loading.execution ? "Running..." : "Run Code"}
          </button>
          <button
            onClick={() => handleAction("complexity")}
            disabled={loading.complexity}
            className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-emerald-600 disabled:bg-slate-600 transition-all"
          >
            {loading.complexity ? "Analyzing..." : "Analyze Complexity"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditorPage;
