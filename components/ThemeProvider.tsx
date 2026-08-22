
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  themeColor: string;
  setThemeColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const colors = [
  "#000000", "#6B7280", "#EF4444", "#F97316", "#F59E0B", "#EAB308", 
  "#84CC16", "#22C55E", "#10B981", "#14B8A6", "#06B6D4", "#0EA5E9", 
  "#3B82F6", "#6366F1", "#8B5CF6", "#A855F7", "#D946EF", "#EC4899", "#F43F5E",
];

// Function to convert hex to HSL
function hexToHsl(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return null;
  }
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeColor, setThemeColorState] = useState<string>('#000000');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedColor = localStorage.getItem('theme-color');
    if (savedColor) {
      setThemeColorState(savedColor);
    } else {
      // If no color is saved, pick a random one
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setThemeColorState(randomColor);
    }
    setMounted(true);
  }, []);

  const setThemeColor = (color: string) => {
    setThemeColorState(color);
    localStorage.setItem('theme-color', color);
  };

  useEffect(() => {
    if (mounted) {
      const hsl = hexToHsl(themeColor);
      if (hsl) {
        const [h, s, l] = hsl;
        const root = document.documentElement;
        
        root.style.setProperty('--theme-h', `${h}`);
        root.style.setProperty('--theme-s', `${s}%`);
        root.style.setProperty('--theme-l', `${l}%`);
        
        // Light theme
        if (themeColor === '#000000') {
             root.style.setProperty('--background-light', `0 0% 98%`);
             root.style.setProperty('--foreground-light', `0 0% 3.9%`);
             root.style.setProperty('--primary-light', `0 0% 9%`);
             root.style.setProperty('--primary-foreground-light', `0 0% 98%`);
        } else {
             root.style.setProperty('--background-light', `${h} ${s}% 98%`);
             root.style.setProperty('--foreground-light', `${h} ${s}% ${Math.max(l - 40, 10)}%`);
             root.style.setProperty('--primary-light', `${h} ${s}% ${Math.max(l-10, 15)}%`);
             root.style.setProperty('--primary-foreground-light', `0 0% 100%`);
        }

        // Dark theme
        if (themeColor === '#000000') {
             root.style.setProperty('--background-dark', `0 0% 3.9%`);
             root.style.setProperty('--foreground-dark', `0 0% 98%`);
             root.style.setProperty('--primary-dark', `0 0% 98%`);
             root.style.setProperty('--primary-foreground-dark', `0 0% 9%`);
        } else {
            root.style.setProperty('--background-dark', `${h} ${s}% 3.9%`);
            root.style.setProperty('--foreground-dark', `${h} ${s}% ${Math.min(l + 60, 98)}%`);
            root.style.setProperty('--primary-dark', `${h} ${s}% ${Math.min(l + 10, 90)}%`);
            root.style.setProperty('--primary-foreground-dark', `${h} ${s}% 10%`);
        }

      }
    }
  }, [themeColor, mounted]);
  

  const value = {
    themeColor,
    setThemeColor,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
