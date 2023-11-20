"use client";
import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();
const themeUpdateContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(themeUpdateContext);
}
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("light");
  function ToggleMode() {
    if (darkMode === "light") {
      setDarkMode("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setDarkMode(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={darkMode}>
      <themeUpdateContext.Provider value={ToggleMode}>
        {children}
      </themeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
