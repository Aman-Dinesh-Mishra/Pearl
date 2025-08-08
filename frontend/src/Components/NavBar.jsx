import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-slate-800/50 backdrop-blur-sm border-b border-white/10 p-4 flex justify-between items-center">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-emerald-300 cursor-pointer"
      >
        Pearl <span className="text-white">Editor</span>
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-slate-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-600"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/editor")}
          className="bg-emerald-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-600"
        >
          Editor
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
