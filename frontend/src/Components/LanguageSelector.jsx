/*const LanguageSelector = ({ language, onSelect }) => {
  const languages = [
    { name: "JavaScript", value: "javascript" },
    { name: "Python", value: "python" },
    { name: "Java", value: "java" },
    { name: "C++", value: "cpp" },
    { name: "C", value: "c" },
    { name: "TypeScript", value: "typescript" },
    { name: "R", value: "r" },
  ];

  return (
    <div className="flex justify-end mb-4">
      <label htmlFor="language-select" className="text-slate-300 mr-3">
        Language:
      </label>
      <select
        id="language-select"
        value={language.value}
        onChange={(e) =>
          onSelect(languages.find((lang) => lang.value === e.target.value))
        }
        className="bg-slate-700 text-white py-2 px-4 rounded-md"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
*/
import { languageOptions } from "../utils/constants";

const LanguageSelector = ({ language, onSelect }) => {
  const handleSelect = (event) => {
    const selectedLang = languageOptions.find(
      (lang) => lang.value === event.target.value
    );
    onSelect(selectedLang);
  };

  return (
    <div className="flex justify-end mb-4 items-center">
      <label htmlFor="language-select" className="text-slate-300 mr-3">
        Language:
      </label>
      <select
        id="language-select"
        value={language.value}
        onChange={handleSelect}
        className="bg-slate-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-600 cursor-pointer"
      >
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
