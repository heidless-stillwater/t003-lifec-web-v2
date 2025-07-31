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
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme-mode', theme);
    }
  }, [theme, isMounted]);
  
  useEffect(() => {
    if (isMounted) {
      const selectedPalette = appThemes.primaryColorsThemes[palette];
      if (selectedPalette) {
        const root = document.documentElement;
        
        // Use the appropriate variables based on light/dark mode
        const themeVariables = selectedPalette[theme];
        
        const colorMap = {
          '--background': themeVariables['--bg-primary'],
          '--foreground': themeVariables['--text-primary'],
          '--card': themeVariables['--bg-surface'],
          '--card-foreground': themeVariables['--text-primary'],
          '--popover': themeVariables['--bg-surface'],
          '--popover-foreground': themeVariables['--text-primary'],
          '--primary': themeVariables['--accent-primary'],
          '--primary-foreground': theme === 'light' ? selectedPalette.dark['--text-primary'] : selectedPalette.light['--text-primary'],
          '--secondary': themeVariables['--bg-primary'],
          '--secondary-foreground': themeVariables['--text-primary'],
          '--muted': themeVariables['--bg-primary'],
          '--muted-foreground': themeVariables['--text-secondary'],
          '--accent': themeVariables['--accent-secondary'],
          '--accent-foreground': theme === 'light' ? selectedPalette.dark['--text-primary'] : selectedPalette.light['--text-primary'],
          '--destructive': themeVariables['--destructive'],
          '--destructive-foreground': theme === 'light' ? selectedPalette.dark['--text-primary'] : selectedPalette.light['--text-primary'],
          '--border': themeVariables['--border-color'],
          '--input': themeVariables['--border-color'],
          '--ring': themeVariables['--accent-primary'],
        };
        
        for (const [key, value] of Object.entries(colorMap)) {
            if (value) {
                root.style.setProperty(key, `hsl(${value})`);
            }
        }
        
        localStorage.setItem('theme-palette', palette);
      }
    }
  }, [palette, theme, isMounted]);


  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setThemeState(newTheme);
    },
    palette,
    setPalette: (newPalette: PaletteName) => {
      setPaletteState(newPalette);
    },
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
