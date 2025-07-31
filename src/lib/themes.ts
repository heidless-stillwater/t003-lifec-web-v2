export const PRIMARY_COLORS = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

const skySerenityTheme = {
  swatchColor: '#0284C7', // Sky 600
  light: {
    '--light-background': '0 0% 100%',
    '--light-foreground': '222.2 84% 4.9%',
    '--light-card': '0 0% 100%',
    '--light-card-foreground': '222.2 84% 4.9%',
    '--light-popover': '0 0% 100%',
    '--light-popover-foreground': '222.2 84% 4.9%',
    '--light-primary': '195 49% 64%',
    '--light-primary-foreground': '210 40% 98%',
    '--light-secondary': '210 40% 96.1%',
    '--light-secondary-foreground': '222.2 47.4% 11.2%',
    '--light-muted': '210 40% 96.1%',
    '--light-muted-foreground': '215.4 16.3% 46.9%',
    '--light-accent': '291 64% 42%',
    '--light-accent-foreground': '0 0% 98%',
    '--light-destructive': '0 84.2% 60.2%',
    '--light-destructive-foreground': '0 0% 98%',
    '--light-border': '214.3 31.8% 91.4%',
    '--light-input': '214.3 31.8% 91.4%',
    '--light-ring': '195 49% 64%',
  },
  dark: {
    '--dark-background': '222.2 84% 4.9%',
    '--dark-foreground': '210 40% 98%',
    '--dark-card': '222.2 84% 4.9%',
    '--dark-card-foreground': '210 40% 98%',
    '--dark-popover': '222.2 84% 4.9%',
    '--dark-popover-foreground': '210 40% 98%',
    '--dark-primary': '195 49% 64%',
    '--dark-primary-foreground': '222.2 47.4% 11.2%',
    '--dark-secondary': '217.2 32.6% 17.5%',
    '--dark-secondary-foreground': '210 40% 98%',
    '--dark-muted': '217.2 32.6% 17.5%',
    '--dark-muted-foreground': '215 20.2% 65.1%',
    '--dark-accent': '291 64% 42%',
    '--dark-accent-foreground': '210 40% 98%',
    '--dark-destructive': '0 62.8% 30.6%',
    '--dark-destructive-foreground': '210 40% 98%',
    '--dark-border': '217.2 32.6% 17.5%',
    '--dark-input': '217.2 32.6% 17.5%',
    '--dark-ring': '195 49% 64%',
  },
};

const otherPrimaryColorThemes = Object.fromEntries(
  Object.entries({
    // 2. Orange Zest
    'Orange Zest': {
      swatchColor: '#EA580C', // Orange 600
       light: {
        '--light-primary': '25 95% 53%', 
        '--light-accent': '190 81% 54%',
       },
      dark: {
        '--dark-primary': '25 95% 53%',
        '--dark-accent': '190 81% 54%',
      },
    },

    // 3. Amber Glow
    'Amber Glow': {
      swatchColor: '#D97706', // Amber 600
      light: {
        '--light-primary': '39 92% 51%',
        '--light-accent': '217 91% 60%',
      },
      dark: {
        '--dark-primary': '39 92% 51%',
        '--dark-accent': '217 91% 60%',
      },
    },

    // 4. Yellow Sunshine
    'Yellow Sunshine': {
      swatchColor: '#CA8A04', // Yellow 600
      light: {
        '--light-primary': '48 96% 47%',
        '--light-accent': '262 88% 66%',
      },
      dark: {
        '--dark-primary': '48 96% 47%',
        '--dark-accent': '262 88% 66%',
      },
    },

    // 5. Lime Zest
    'Lime Zest': {
      swatchColor: '#65A30D', // Lime 600
      light: {
        '--light-primary': '74 85% 35%',
        '--light-accent': '0 84.2% 60.2%', 
      },
      dark: {
        '--dark-primary': '74 85% 35%',
        '--dark-accent': '0 84.2% 60.2%', 
      },
    },

    // 6. Forest Green
    'Forest Green': {
      swatchColor: '#16A34A', // Green 600
      light: {
        '--light-primary': '145 74% 39%',
        '--light-accent': '221 83% 53%',
      },
      dark: {
        '--dark-primary': '145 74% 39%',
        '--dark-accent': '221 83% 53%',
      },
    },

    // 7. Emerald Depth
    'Emerald Depth': {
      swatchColor: '#059669', // Emerald 600
      light: {
        '--light-primary': '160 91% 30%',
        '--light-accent': '39 92% 51%',
      },
      dark: {
        '--dark-primary': '160 91% 30%',
        '--dark-accent': '39 92% 51%',
      },
    },

    // 8. Teal Tranquility
    'Teal Tranquility': {
      swatchColor: '#0D9488', // Teal 600
      light: {
        '--light-primary': '175 84% 32%',
        '--light-accent': '336 82% 59%',
      },
      dark: {
        '--dark-primary': '175 84% 32%',
        '--dark-accent': '336 82% 59%',
      },
    },

    // 9. Cyan Energy
    'Cyan Energy': {
      swatchColor: '#06B6D4', // Cyan 600
      light: {
        '--light-primary': '187 95% 42%',
        '--light-accent': '351 89% 60%',
      },
      dark: {
        '--dark-primary': '187 95% 42%',
        '--dark-accent': '351 89% 60%',
      },
    },
    // 12. Indigo Depth
    'Indigo Depth': {
      swatchColor: '#4F46E5', // Indigo 600
      light: {
        '--light-primary': '242 79% 58%',
        '--light-accent': '39 92% 51%',
      },
      dark: {
        '--dark-primary': '242 79% 58%',
        '--dark-accent': '39 92% 51%',
      },
    },

    // 13. Violet Dream
    'Violet Dream': {
      swatchColor: '#7C3AED', // Violet 600
      light: {
        '--light-primary': '255 83% 63%',
        '--light-accent': '53 98% 50%',
      },
      dark: {
        '--dark-primary': '255 83% 63%',
        '--dark-accent': '53 98% 50%',
      },
    },

    // 14. Royal Purple
    'Royal Purple': {
      swatchColor: '#9333EA', // Purple 600
      light: {
        '--light-primary': '271 83% 56%',
        '--light-accent': '190 81% 54%',
      },
      dark: {
        '--dark-primary': '271 83% 56%',
        '--dark-accent': '190 81% 54%',
      },
    },

    // 15. Fuchsia Burst
    'Fuchsia Burst': {
      swatchColor: '#C026D3', // Fuchsia 600
      light: {
        '--light-primary': '296 79% 49%',
        '--light-accent': '173 58% 39%',
      },
      dark: {
        '--dark-primary': '296 79% 49%',
        '--dark-accent': '173 58% 39%',
      },
    },

    // 16. Vibrant Pink
    'Vibrant Pink': {
      swatchColor: '#DB2777', // Pink 600
      light: {
        '--light-primary': '327 79% 51%',
        '--light-accent': '190 81% 54%',
      },
      dark: {
        '--dark-primary': '327 79% 51%',
        '--dark-accent': '190 81% 54%',
      },
    },

    // 17. Rose Garden
    'Rose Garden': {
      swatchColor: '#E11D48', // Rose 600
      light: {
        '--light-primary': '348 83% 50%',
        '--light-accent': '221 83% 53%',
      },
      dark: {
        '--dark-primary': '348 83% 50%',
        '--dark-accent': '221 83% 53%',
      },
    },
  }).map(([name, theme]) => [
    name,
    {
      ...theme,
      light: {
        ...skySerenityTheme.light,
        ...theme.light,
        '--light-ring': theme.light['--light-primary'],
      },
      dark: {
        ...skySerenityTheme.dark,
        ...theme.dark,
        '--dark-ring': theme.dark['--dark-primary'],
      }
    }
  ])
);

export const appThemes = {
  // Nested structure for the 'Primary Colors' submenu
  primaryColorsThemes: {
    // 1. Red Dominant
    'Red Dominant': {
      swatchColor: '#DC2626', // Red 600
      light: {
        '--light-background': '0 0% 100%',
        '--light-foreground': '222.2 84% 4.9%',
        '--light-card': '0 0% 100%',
        '--light-card-foreground': '222.2 84% 4.9%',
        '--light-popover': '0 0% 100%',
        '--light-popover-foreground': '222.2 84% 4.9%',
        '--light-primary': '358 75% 59%',
        '--light-primary-foreground': '0 0% 98%',
        '--light-secondary': '210 40% 96.1%',
        '--light-secondary-foreground': '222.2 47.4% 11.2%',
        '--light-muted': '210 40% 96.1%',
        '--light-muted-foreground': '215.4 16.3% 46.9%',
        '--light-accent': '142 71% 45%',
        '--light-accent-foreground': '0 0% 98%',
        '--light-destructive': '0 84.2% 60.2%',
        '--light-destructive-foreground': '0 0% 98%',
        '--light-border': '214.3 31.8% 91.4%',
        '--light-input': '214.3 31.8% 91.4%',
        '--light-ring': '358 75% 59%',
      },
      dark: {
        '--dark-background': '222.2 84% 4.9%',
        '--dark-foreground': '210 40% 98%',
        '--dark-card': '222.2 84% 4.9%',
        '--dark-card-foreground': '210 40% 98%',
        '--dark-popover': '222.2 84% 4.9%',
        '--dark-popover-foreground': '210 40% 98%',
        '--dark-primary': '358 75% 59%',
        '--dark-primary-foreground': '0 0% 98%',
        '--dark-secondary': '217.2 32.6% 17.5%',
        '--dark-secondary-foreground': '210 40% 98%',
        '--dark-muted': '217.2 32.6% 17.5%',
        '--dark-muted-foreground': '215 20.2% 65.1%',
        '--dark-accent': '142 71% 45%',
        '--dark-accent-foreground': '0 0% 98%',
        '--dark-destructive': '0 62.8% 30.6%',
        '--dark-destructive-foreground': '210 40% 98%',
        '--dark-border': '217.2 32.6% 17.5%',
        '--dark-input': '217.2 32.6% 17.5%',
        '--dark-ring': '358 75% 59%',
      },
    },
    // 10. Sky Serenity
    'Sky Serenity': skySerenityTheme,

    // 11. Bold Blue
    'Bold Blue': {
      swatchColor: '#2563EB', // Blue 600
      light: {
        '--light-background': '0 0% 100%', 
        '--light-foreground': '222.2 84% 4.9%',
        '--light-card': '0 0% 100%',
        '--light-card-foreground': '222.2 84% 4.9%',
        '--light-popover': '0 0% 100%',
        '--light-popover-foreground': '222.2 84% 4.9%',
        '--light-primary': '224 82% 52%',
        '--light-primary-foreground': '0 0% 98%',
        '--light-secondary': '210 40% 96.1%',
        '--light-secondary-foreground': '222.2 47.4% 11.2%',
        '--light-muted': '210 40% 96.1%',
        '--light-muted-foreground': '215.4 16.3% 46.9%',
        '--light-accent': '336 82% 59%',
        '--light-accent-foreground': '0 0% 98%',
        '--light-destructive': '0 84.2% 60.2%',
        '--light-destructive-foreground': '0 0% 98%',
        '--light-border': '214.3 31.8% 91.4%',
        '--light-input': '214.3 31.8% 91.4%',
        '--light-ring': '224 82% 52%',
      },
      dark: {
        '--dark-background': '222.2 84% 4.9%',
        '--dark-foreground': '210 40% 98%',
        '--dark-card': '222.2 84% 4.9%',
        '--dark-card-foreground': '210 40% 98%',
        '--dark-popover': '222.2 84% 4.9%',
        '--dark-popover-foreground': '210 40% 98%',
        '--dark-primary': '224 82% 52%',
        '--dark-primary-foreground': '0 0% 98%',
        '--dark-secondary': '217.2 32.6% 17.5%',
        '--dark-secondary-foreground': '210 40% 98%',
        '--dark-muted': '217.2 32.6% 17.5%',
        '--dark-muted-foreground': '215 20.2% 65.1%',
        '--dark-accent': '336 82% 59%',
        '--dark-accent-foreground': '0 0% 98%',
        '--dark-destructive': '0 62.8% 30.6%',
        '--dark-destructive-foreground': '210 40% 98%',
        '--dark-border': '217.2 32.6% 17.5%',
        '--dark-input': '217.2 32.6% 17.5%',
        '--dark-ring': '224 82% 52%',
      },
    },
    ...otherPrimaryColorThemes,
  },
  daisyUIThemes: {
    'Forest': {
      swatchColor: '#1EB854',
      light: {},
      dark: {},
    },
    'Cyberpunk': {
      swatchColor: '#FF00FF',
      light: {},
      dark: {},
    },
    'Cupcake': {
      swatchColor: '#F08080',
      light: {},
      dark: {},
    },
    'Corporate': {
      swatchColor: '#4C6EF5',
      light: {},
      dark: {},
    },
    'Dracula': {
      swatchColor: '#FF6E99',
      light: {},
      dark: {},
    },
    'Synthwave': {
      swatchColor: '#FF7ED3',
      light: {},
      dark: {},
    },
    'Halloween': {
      swatchColor: '#FF7000',
      light: {},
      dark: {},
    },
    'Bumblebee': { swatchColor: '#FDD835', light: {}, dark: {} },
    'Emerald': { swatchColor: '#36D399', light: {}, dark: {} },
    'Retro': { swatchColor: '#EF4444', light: {}, dark: {} },
    'Valentine': { swatchColor: '#FF6D9B', light: {}, dark: {} },
    'Garden': { swatchColor: '#1A531A', light: {}, dark: {} },
    'Aqua': { swatchColor: '#00FFFF', light: {}, dark: {} },
    'Lofi': { swatchColor: '#808080', light: {}, dark: {} },
    'Pastel': { swatchColor: '#FFB6C1', light: {}, dark: {} },
    'Fantasy': { swatchColor: '#A855F7', light: {}, dark: {} },
    'Wireframe': { swatchColor: '#AFAFAF', light: {}, dark: {} },
    'Black': { swatchColor: '#000000', light: {}, dark: {} },
    'Luxury': { swatchColor: '#A67C00', light: {}, dark: {} },
    'CMYK': { swatchColor: '#00FFFF', light: {}, dark: {} },
    'Autumn': { swatchColor: '#D87A00', light: {}, dark: {} },
    'Business': { swatchColor: '#1C3D5A', light: {}, dark: {} },
    'Acid': { swatchColor: '#6BFF00', light: {}, dark: {} },
    'Lemonade': { swatchColor: '#FFFA37', light: {}, dark: {} },
    'Night': { swatchColor: '#0F0F1A', light: {}, dark: {} },
    'Coffee': { swatchColor: '#6F4E37', light: {}, dark: {} },
    'Winter': { swatchColor: '#ADD8E6', light: {}, dark: {} },
  },
};
