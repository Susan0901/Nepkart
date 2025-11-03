import React from "react";
import { useTheme } from "../hooks/useTheme";

const Welcome = () => {
  const { themeMode, toggleThemeMode } = useTheme();
  console.log("Theme Mode", themeMode);
  return (
    <div className="h-screen dark:bg-neutral-900 dark:text-white">
      <div className="flex flex-col items-start">
        Welcome {import.meta.env.VITE_APP_NAME}
        <button onClick={toggleThemeMode} className="bg-green-500 p-2 text-white">Toggle</button>
      </div>
    </div>
  );
};

export default Welcome;
