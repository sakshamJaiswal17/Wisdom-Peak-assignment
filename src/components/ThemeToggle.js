// src/components/ThemeToggle.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(UserContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
