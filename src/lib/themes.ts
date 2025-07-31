
export const PRIMARY_COLORS = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

const skySerenityTheme = {
  swatchColor: '#0284C7', // Sky 600
  light: {
    '--background': '0 0% 100%',
    '--foreground': '222.2 84% 4.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '222.2 84% 4.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '222.2 84% 4.9%',
    '--primary': '195 49% 64%',
    '--primary-foreground': '210 40% 98%',
    '--secondary': '210 40% 96.1%',
    '--secondary-foreground': '222.2 47.4% 11.2%',
    '--muted': '210 40% 96.1%',
    '--muted-foreground': '215.4 16.3% 46.9%',
    '--accent': '291 64% 42%',
    '--accent-foreground': '0 0% 98%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 98%',
    '--border': '214.3 31.8% 91.4%',
    '--input': '214.3 31.8% 91.4%',
    '--ring': '195 49% 64%',
  },
  dark: {
    '--background': '222.2 84% 4.9%',
    '--foreground': '210 40% 98%',
    '--card': '222.2 84% 4.9%',
    '--card-foreground': '210 40% 98%',
    '--popover': '222.2 84% 4.9%',
    '--popover-foreground': '210 40% 98%',
    '--primary': '195 49% 64%',
    '--primary-foreground': '222.2 47.4% 11.2%',
    '--secondary': '217.2 32.6% 17.5%',
    '--secondary-foreground': '210 40% 98%',
    '--muted': '217.2 32.6% 17.5%',
    '--muted-foreground': '215 20.2% 65.1%',
    '--accent': '291 64% 42%',
    '--accent-foreground': '210 40% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '210 40% 98%',
    '--border': '217.2 32.6% 17.5%',
    '--input': '217.2 32.6% 17.5%',
    '--ring': '195 49% 64%',
  },
};

const otherPrimaryColorThemes = Object.fromEntries(
  Object.entries({
    // 2. Orange Zest
    'Orange Zest': {
      swatchColor: '#EA580C', // Orange 600
       light: {
        '--primary': '25 95% 53%', 
        '--accent': '190 81% 54%',
       },
      dark: {
        '--primary': '25 95% 53%',
        '--accent': '190 81% 54%',
      },
    },

    // 3. Amber Glow
    'Amber Glow': {
      swatchColor: '#D97706', // Amber 600
      light: {
        '--primary': '39 92% 51%',
        '--accent': '217 91% 60%',
      },
      dark: {
        '--primary': '39 92% 51%',
        '--accent': '217 91% 60%',
      },
    },

    // 4. Yellow Sunshine
    'Yellow Sunshine': {
      swatchColor: '#CA8A04', // Yellow 600
      light: {
        '--primary': '48 96% 47%',
        '--accent': '262 88% 66%',
      },
      dark: {
        '--primary': '48 96% 47%',
        '--accent': '262 88% 66%',
      },
    },

    // 5. Lime Zest
    'Lime Zest': {
      swatchColor: '#65A30D', // Lime 600
      light: {
        '--primary': '74 85% 35%',
        '--accent': '0 84.2% 60.2%', 
      },
      dark: {
        '--primary': '74 85% 35%',
        '--accent': '0 84.2% 60.2%', 
      },
    },

    // 6. Forest Green
    'Forest Green': {
      swatchColor: '#16A34A', // Green 600
      light: {
        '--primary': '145 74% 39%',
        '--accent': '221 83% 53%',
      },
      dark: {
        '--primary': '145 74% 39%',
        '--accent': '221 83% 53%',
      },
    },

    // 7. Emerald Depth
    'Emerald Depth': {
      swatchColor: '#059669', // Emerald 600
      light: {
        '--primary': '160 91% 30%',
        '--accent': '39 92% 51%',
      },
      dark: {
        '--primary': '160 91% 30%',
        '--accent': '39 92% 51%',
      },
    },

    // 8. Teal Tranquility
    'Teal Tranquility': {
      swatchColor: '#0D9488', // Teal 600
      light: {
        '--primary': '175 84% 32%',
        '--accent': '336 82% 59%',
      },
      dark: {
        '--primary': '175 84% 32%',
        '--accent': '336 82% 59%',
      },
    },

    // 9. Cyan Energy
    'Cyan Energy': {
      swatchColor: '#06B6D4', // Cyan 600
      light: {
        '--primary': '187 95% 42%',
        '--accent': '351 89% 60%',
      },
      dark: {
        '--primary': '187 95% 42%',
        '--accent': '351 89% 60%',
      },
    },
    // 12. Indigo Depth
    'Indigo Depth': {
      swatchColor: '#4F46E5', // Indigo 600
      light: {
        '--primary': '242 79% 58%',
        '--accent': '39 92% 51%',
      },
      dark: {
        '--primary': '242 79% 58%',
        '--accent': '39 92% 51%',
      },
    },

    // 13. Violet Dream
    'Violet Dream': {
      swatchColor: '#7C3AED', // Violet 600
      light: {
        '--primary': '255 83% 63%',
        '--accent': '53 98% 50%',
      },
      dark: {
        '--primary': '255 83% 63%',
        '--accent': '53 98% 50%',
      },
    },

    // 14. Royal Purple
    'Royal Purple': {
      swatchColor: '#9333EA', // Purple 600
      light: {
        '--primary': '271 83% 56%',
        '--accent': '190 81% 54%',
      },
      dark: {
        '--primary': '271 83% 56%',
        '--accent': '190 81% 54%',
      },
    },

    // 15. Fuchsia Burst
    'Fuchsia Burst': {
      swatchColor: '#C026D3', // Fuchsia 600
      light: {
        '--primary': '296 79% 49%',
        '--accent': '173 58% 39%',
      },
      dark: {
        '--primary': '296 79% 49%',
        '--accent': '173 58% 39%',
      },
    },

    // 16. Vibrant Pink
    'Vibrant Pink': {
      swatchColor: '#DB2777', // Pink 600
      light: {
        '--primary': '327 79% 51%',
        '--accent': '190 81% 54%',
      },
      dark: {
        '--primary': '327 79% 51%',
        '--accent': '190 81% 54%',
      },
    },

    // 17. Rose Garden
    'Rose Garden': {
      swatchColor: '#E11D48', // Rose 600
      light: {
        '--primary': '348 83% 50%',
        '--accent': '221 83% 53%',
      },
      dark: {
        '--primary': '348 83% 50%',
        '--accent': '221 83% 53%',
      },
    },
  }).map(([name, theme]) => [
    name,
    {
      ...theme,
      light: {
        ...skySerenityTheme.light,
        ...theme.light,
        '--ring': theme.light['--primary'],
      },
      dark: {
        ...skySerenityTheme.dark,
        ...theme.dark,
        '--ring': theme.dark['--primary'],
      }
    }
  ])
);

export const appThemes = {
  primaryColorsThemes: {
    'Red Dominant': {
      swatchColor: '#DC2626', // Red 600
      light: {
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '358 75% 59%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '142 71% 45%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '358 75% 59%',
      },
      dark: {
        '--background': '222.2 84% 4.9%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '358 75% 59%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '142 71% 45%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '358 75% 59%',
      },
    },
    'Sky Serenity': skySerenityTheme,
    'Bold Blue': {
      swatchColor: '#2563EB', // Blue 600
      light: {
        '--background': '0 0% 100%', 
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '224 82% 52%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '336 82% 59%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '224 82% 52%',
      },
      dark: {
        '--background': '222.2 84% 4.9%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '224 82% 52%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '336 82% 59%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '224 82% 52%',
      },
    },
    ...otherPrimaryColorThemes,
  },
  daisyUIThemes: {
    'Forest': {
      swatchColor: '#1EB854',
      light: {
        '--primary': '158 64% 52%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '215 28% 17%',
        '--secondary-foreground': '0 0% 100%',
        '--accent': '138 69% 61%',
        '--accent-foreground': '0 0% 0%',
        '--neutral': '0 0% 100%',
        '--neutral-foreground': '0 0% 0%',
        '--background': '0 0% 100%',
        '--foreground': '0 0% 0%',
      },
      dark: {
        '--primary': '158 64% 52%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '215 28% 17%',
        '--secondary-foreground': '0 0% 100%',
        '--accent': '138 69% 61%',
        '--accent-foreground': '0 0% 0%',
        '--neutral': '0 0% 0%',
        '--neutral-foreground': '0 0% 100%',
        '--background': '215 28% 17%',
        '--foreground': '0 0% 100%',
      },
    },
    'Cyberpunk': {
      swatchColor: '#FF7ED3',
       light: {
        '--primary': '259 94% 71%',
        '--primary-foreground': '0 0% 0%',
        '--secondary': '174 100% 50%',
        '--secondary-foreground': '0 0% 0%',
        '--accent': '314 100% 64%',
        '--accent-foreground': '0 0% 0%',
        '--neutral': '0 0% 100%',
        '--neutral-foreground': '0 0% 0%',
        '--background': '0 0% 100%',
        '--foreground': '0 0% 0%',
      },
      dark: {
        '--primary': '259 94% 71%',
        '--primary-foreground': '0 0% 0%',
        '--secondary': '174 100% 50%',
        '--secondary-foreground': '0 0% 0%',
        '--accent': '314 100% 64%',
        '--accent-foreground': '0 0% 0%',
        '--neutral': '0 0% 0%',
        '--neutral-foreground': '0 0% 100%',
        '--background': '225 24% 12%',
        '--foreground': '0 0% 100%',
      },
    },
    'Cupcake': {
        swatchColor: '#F08080',
        light: {},
        dark: {},
    },
    'Bumblebee': { swatchColor: '#FDD835', light: {}, dark: {} },
    'Emerald': { swatchColor: '#36D399', light: {}, dark: {} },
    'Corporate': { swatchColor: '#4C6EF5', light: {}, dark: {} },
    'Synthwave': { swatchColor: '#FF7ED3', light: {}, dark: {} },
    'Retro': { swatchColor: '#EF4444', light: {}, dark: {} },
    'Valentine': { swatchColor: '#FF6D9B', light: {}, dark: {} },
    'Halloween': { swatchColor: '#FF7000', light: {}, dark: {} },
    'Garden': { swatchColor: '#1A531A', light: {}, dark: {} },
    'Aqua': { swatchColor: '#00FFFF', light: {}, dark: {} },
    'Lofi': { swatchColor: '#808080', light: {}, dark: {} },
    'Pastel': { swatchColor: '#FFB6C1', light: {}, dark: {} },
    'Fantasy': { swatchColor: '#A855F7', light: {}, dark: {} },
    'Wireframe': { swatchColor: '#AFAFAF', light: {}, dark: {} },
    'Black': { swatchColor: '#000000', light: {}, dark: {} },
    'Luxury': { swatchColor: '#A67C00', light: {}, dark: {} },
    'Dracula': { swatchColor: '#FF6E99', light: {}, dark: {} },
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
