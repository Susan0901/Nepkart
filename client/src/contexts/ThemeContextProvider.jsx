import React, { useEffect, useState } from "react";
import ThemeContext from "../hooks/useTheme";

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
  );

  useEffect(() => {
    if (themeMode === "dark") {
      localStorage.setItem("themeMode", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("themeMode", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const toggleThemeMode = () =>
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
