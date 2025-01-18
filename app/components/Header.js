"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Add/Remove 'dark' class to HTML element
    localStorage.setItem("theme", newTheme); // Persist theme in localStorage
  };

  // On component mount, set the theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div className=" ">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200  dark:bg-gray-800 text-gray-800 text-center dark:text-gray-200 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? (
          <MdDarkMode size={24} /> // Moon Icon for Light Mode
        ) : (
          <MdLightMode size={24} /> // Sun Icon for Dark Mode
        )}
      </button>
    </div>
  );
};

export default Header;
