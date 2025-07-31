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
  const [theme, setThemeState] = useState<Theme>('light');
  const [palette, setPaletteState] = useState<PaletteName>('Sky Serenity');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme-mode') as Theme | null;
    const storedPalette = localStorage.getItem('theme-palette') as PaletteName | null;
    
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setThemeState(storedTheme || systemTheme);
    setPaletteState(storedPalette || 'Sky Serenity');
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
        const root = document.documentElement;
        const themeVariables = selectedPalette[theme];
        
        // These are the variables from globals.css that need to be updated
        const colorMap: { [key: string]: string } = {
          '--background': themeVariables['--bg-primary']?.replace(/ /g, ', ') || '',
          '--foreground': themeVariables['--text-primary']?.replace(/ /g, ', ') || '',
          '--card': themeVariables['--bg-surface']?.replace(/ /g, ', ') || '',
          '--card-foreground': themeVariables['--text-primary']?.replace(/ /g, ', ') || '',
          '--popover': themeVariables['--bg-surface']?.replace(/ /g, ', ') || '',
          '--popover-foreground': themeVariables['--text-primary']?.replace(/ /g, ', ') || '',
          '--primary': themeVariables['--accent-primary']?.replace(/ /g, ', ') || '',
          '--primary-foreground': selectedPalette.light['--text-primary']?.replace(/ /g, ', ') || '',
          '--secondary': themeVariables['--bg-primary']?.replace(/ /g, ', ') || '', // Using bg-primary as secondary
          '--secondary-foreground': themeVariables['--text-primary']?.replace(/ /g, ', ') || '',
          '--muted': themeVariables['--bg-primary']?.replace(/ /g, ', ') || '', // Using bg-primary as muted
          '--muted-foreground': themeVariables['--text-secondary']?.replace(/ /g, ', ') || '',
          '--accent': themeVariables['--accent-secondary']?.replace(/ /g, ', ') || '',
          '--accent-foreground': selectedPalette.light['--text-primary']?.replace(/ /g, ', ') || '',
          '--destructive': themeVariables['--destructive']?.replace(/ /g, ', ') || '',
          '--destructive-foreground': selectedPalette.light['--text-primary']?.replace(/ /g, ', ') || '',
          '--border': themeVariables['--border-color']?.replace(/ /g, ', ') || '',
          '--input': themeVariables['--border-color']?.replace(/ /g, ', ') || '',
          '--ring': themeVariables['--accent-primary']?.replace(/ /g, ', ') || ''
        };
        
        for (const [key, value] of Object.entries(colorMap)) {
            if (value) {
                root.style.setProperty(key, value);
            }
        }
        
        localStorage.setItem('theme-palette', palette);
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
