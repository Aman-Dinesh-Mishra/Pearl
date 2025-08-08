import React from "react";

/**
 * Displays the main header for the application.
 * It's a simple, stateless component focused only on presentation.
 */
const Header = () => {
  return (
    <header className="text-center py-4">
      <h1 className="text-4xl font-bold text-emerald-300">
        Pearl <span className="text-white">Editor</span>
      </h1>
      <p className="text-md text-slate-400 mt-1">
        Analyze Time & Space Complexity with Ease
      </p>
    </header>
  );
};

export default Header;
