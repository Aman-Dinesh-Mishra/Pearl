import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const codeSnippet = `
function getComplexity(n) {
  if (n <= 1) return n;
  return getComplexity(n - 1) + getComplexity(n - 2);
}`;

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans overflow-hidden relative">
      {/* 🔹 Stylized Navbar */}
      <nav className="w-full bg-slate-800/60 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center shadow-md">
        {/* 🔸 Logo */}
        <h1 className="text-3xl font-extrabold text-emerald-400 tracking-tight">
          Pearl <span className="text-white">Editor</span>
        </h1>

        {/* 🔸 Nav Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => navigate("/")}
            className="text-white px-4 py-2 rounded-md hover:bg-emerald-500/20 transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/editor")}
            className="text-white px-4 py-2 rounded-md hover:bg-emerald-500/20 transition-colors duration-200"
          >
            Editor
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-white px-4 py-2 rounded-md hover:bg-emerald-500/20 transition-colors duration-200"
          >
            Chat
          </button>
          <button
            onClick={() => navigate("/login")}
            className="text-white px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 font-semibold transition-all"
          >
            Login
          </button>
        </div>
      </nav>
      {/* 🔹 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />

      {/* 🔹 Main Content */}
      <main className="relative z-10 flex flex-col items-center text-center mt-20 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold">
          Pearl <span className="text-emerald-400">Editor</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400">
          Unravel Code Complexity — instantly, intuitively, elegantly
        </p>
        <button
          className="mt-10 bg-emerald-500 text-2xl text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
          onClick={() => navigate("/editor")}
        >
          Launch Editor
        </button>

        {/* 🔹 Code Preview Box */}
        <div className="mt-16 w-full max-w-lg bg-slate-800/50 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
          <div className="bg-slate-900/80 p-3 flex items-center gap-2 border-b border-white/10">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <pre className="p-6 text-left text-sm font-mono text-slate-300 overflow-auto">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
