import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/editor"); // redirect after "login"
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-6 rounded-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded bg-slate-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded bg-slate-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
