"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) return null;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex">
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={toggleTheme}
          />
        ) : (
          <FaMoon
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={toggleTheme}
          />
        ))}
    </div>
  );
}
