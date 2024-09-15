import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const THEME_KEY = "theme";

export const useTheme = (): [Theme, () => void] => {
  const localStorageChecker = (): Theme => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme as Theme;
    }
    return "light"; // 기본값은 light
  };

  const [theme, setTheme] = useState<Theme>(localStorageChecker());

  const setThemeToggle = () => {
    setTheme((currentTheme) => {
      const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, newTheme); // localStorage에 새 테마 저장
      return newTheme;
    });
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setThemeToggle];
};
