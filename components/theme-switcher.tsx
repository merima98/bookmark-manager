"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <div className="flex gap-4">
      <Sun
        size={ICON_SIZE}
        className="text-muted-foreground cursor-pointer"
        onClick={() => setTheme("light")}
      />
      <Moon
        size={ICON_SIZE}
        className="text-muted-foreground cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export { ThemeSwitcher };
