'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { appThemes } from '@/lib/themes';

type Theme = 'light' | 'dark';
type PaletteName = keyof typeof appThemes.primaryColorsThemes;

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  palette: PaletteName;
  setPalette: (palette: PaletteName) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [palette, setPaletteState] = useState<PaletteName>('Sky Serenity');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme-mode') as Theme | null;
    const storedPalette = localStorage.getItem('theme-palette') as PaletteName | null;

    if (storedPalette) {
      setPaletteState(storedPalette);
    }

    if (storedTheme) {
      setThemeState(storedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemeState(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme-mode', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
     if (isMounted) {
      const selectedPalette = appThemes.primaryColorsThemes[palette];
      if (selectedPalette) {
        const themeVariables = selectedPalette[theme];
        for (const [key, value] of Object.entries(themeVariables)) {
          document.documentElement.style.setProperty(key, value as string);
        }
         localStorage.setItem('theme-palette', palette);
      }
    }
  }, [palette, theme, isMounted]);
  
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };
  
  const setPalette = (newPalette: PaletteName) => {
    setPaletteState(newPalette);
  };


  const value = useMemo(() => ({
    theme,
    setTheme,
    palette,
    setPalette,
  }), [theme, palette]);

  if (!isMounted) {
    return null; 
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
