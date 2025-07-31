'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>('light');
  const [palette, setPaletteState] = useState<PaletteName>('Sky Serenity');

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedTheme = localStorage.getItem('theme-mode') as Theme | null;
      const storedPalette = localStorage.getItem('theme-palette') as PaletteName | null;
      
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemeState(storedTheme || systemTheme);
      setPaletteState(storedPalette || 'Sky Serenity');

    } catch (e) {
      // In case of error or non-browser environment
      setThemeState('light');
      setPaletteState('Sky Serenity');
    }
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme-mode', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const selectedPalette = appThemes.primaryColorsThemes[palette];
      if (selectedPalette) {
        const root = window.document.documentElement;
        localStorage.setItem('theme-palette', palette);

        // We apply both light and dark vars so they are available for the CSS to use
        const lightVars = selectedPalette.light;
        const darkVars = selectedPalette.dark;
        
        for (const [key, value] of Object.entries(lightVars)) {
            root.style.setProperty(key, value);
        }
        for (const [key, value] of Object.entries(darkVars)) {
            root.style.setProperty(key, value);
        }
      }
    }
  }, [palette, isMounted]);


  const value = {
    theme,
    setTheme: setThemeState,
    palette,
    setPalette: setPaletteState,
  };
  
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
