
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { appThemes } from '@/lib/themes';

type Theme = 'light' | 'dark';
type PaletteName = keyof typeof appThemes.primaryColorsThemes | keyof typeof appThemes.daisyUIThemes | keyof typeof appThemes.bespokeThemes;

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
      
      if (storedTheme) {
        setThemeState(storedTheme);
      } else {
        setThemeState(systemTheme);
      }
      
      if (storedPalette) {
        setPaletteState(storedPalette);
      } else {
        setPaletteState('Sky Serenity');
      }

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
      const allThemes = { ...appThemes.primaryColorsThemes, ...appThemes.daisyUIThemes, ...appThemes.bespokeThemes };
      const selectedPalette = allThemes[palette];

      if (selectedPalette) {
        const root = window.document.documentElement;
        localStorage.setItem('theme-palette', palette);

        // This is a type assertion to inform TypeScript that `selectedPalette` can be indexed by `theme`
        const activeTheme = (selectedPalette as any)[theme];

        if(activeTheme) {
            for (const [key, value] of Object.entries(activeTheme)) {
                root.style.setProperty(key, value as string);
            }
        }
      }
    }
  }, [palette, theme, isMounted]);


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

      