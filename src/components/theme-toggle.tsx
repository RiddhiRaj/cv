"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative transition-all duration-150 hover:scale-110 rounded-full h-8 w-8 
        bg-white/10 dark:bg-slate-950/10
        backdrop-blur-md backdrop-filter 
        border-[1.5px] border-gray-300/30 dark:border-white/20
        shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.25)]
        hover:bg-white/20 dark:hover:bg-slate-950/20"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-150 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-150 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}