export const PRIMARY_COLORS = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

export const appThemes = {
  // Nested structure for the 'Primary Colors' submenu
  primaryColorsThemes: {
    // 1. Red Dominant
    'Red Dominant': {
      swatchColor: '#DC2626', // Red 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '358 75% 59%', 
        '--accent-secondary': '142 71% 45%', 
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '358 75% 59%',
        '--accent-secondary': '142 71% 45%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 2. Orange Zest
    'Orange Zest': {
      swatchColor: '#EA580C', // Orange 600
       light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '25 95% 53%', 
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '25 95% 53%',
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 3. Amber Glow
    'Amber Glow': {
      swatchColor: '#D97706', // Amber 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '39 92% 51%',
        '--accent-secondary': '217 91% 60%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '39 92% 51%',
        '--accent-secondary': '217 91% 60%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 4. Yellow Sunshine
    'Yellow Sunshine': {
      swatchColor: '#CA8A04', // Yellow 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '48 96% 47%',
        '--accent-secondary': '262 88% 66%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '48 96% 47%',
        '--accent-secondary': '262 88% 66%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 5. Lime Zest
    'Lime Zest': {
      swatchColor: '#65A30D', // Lime 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '74 85% 35%',
        '--accent-secondary': '0 84.2% 60.2%', 
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '74 85% 35%',
        '--accent-secondary': '0 84.2% 60.2%', 
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 6. Forest Green
    'Forest Green': {
      swatchColor: '#16A34A', // Green 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '145 74% 39%',
        '--accent-secondary': '221 83% 53%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '145 74% 39%',
        '--accent-secondary': '221 83% 53%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 7. Emerald Depth
    'Emerald Depth': {
      swatchColor: '#059669', // Emerald 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '160 91% 30%',
        '--accent-secondary': '39 92% 51%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '160 91% 30%',
        '--accent-secondary': '39 92% 51%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 8. Teal Tranquility
    'Teal Tranquility': {
      swatchColor: '#0D9488', // Teal 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '175 84% 32%',
        '--accent-secondary': '336 82% 59%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '175 84% 32%',
        '--accent-secondary': '336 82% 59%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 9. Cyan Energy
    'Cyan Energy': {
      swatchColor: '#06B6D4', // Cyan 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '187 95% 42%',
        '--accent-secondary': '351 89% 60%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '187 95% 42%',
        '--accent-secondary': '351 89% 60%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 10. Sky Serenity
    'Sky Serenity': {
      swatchColor: '#0284C7', // Sky 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '200 98% 39%',
        '--accent-secondary': '262 88% 66%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '200 98% 39%',
        '--accent-secondary': '262 88% 66%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 11. Bold Blue
    'Bold Blue': {
      swatchColor: '#2563EB', // Blue 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '224 82% 52%',
        '--accent-secondary': '336 82% 59%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '224 82% 52%',
        '--accent-secondary': '336 82% 59%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 12. Indigo Depth
    'Indigo Depth': {
      swatchColor: '#4F46E5', // Indigo 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '242 79% 58%',
        '--accent-secondary': '39 92% 51%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '242 79% 58%',
        '--accent-secondary': '39 92% 51%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 13. Violet Dream
    'Violet Dream': {
      swatchColor: '#7C3AED', // Violet 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '255 83% 63%',
        '--accent-secondary': '53 98% 50%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '255 83% 63%',
        '--accent-secondary': '53 98% 50%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 14. Royal Purple
    'Royal Purple': {
      swatchColor: '#9333EA', // Purple 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '271 83% 56%',
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '271 83% 56%',
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 15. Fuchsia Burst
    'Fuchsia Burst': {
      swatchColor: '#C026D3', // Fuchsia 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '296 79% 49%',
        '--accent-secondary': '173 58% 39%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '296 79% 49%',
        '--accent-secondary': '173 58% 39%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 16. Vibrant Pink
    'Vibrant Pink': {
      swatchColor: '#DB2777', // Pink 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '327 79% 51%',
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '327 79% 51%',
        '--accent-secondary': '190 81% 54%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },

    // 17. Rose Garden
    'Rose Garden': {
      swatchColor: '#E11D48', // Rose 600
      light: {
        '--bg-primary': '0 0% 100%', 
        '--bg-surface': '0 0% 100%',
        '--text-primary': '222.2 84% 4.9%',
        '--text-secondary': '215.4 16.3% 46.9%', 
        '--accent-primary': '348 83% 50%',
        '--accent-secondary': '221 83% 53%',
        '--destructive': '0 84.2% 60.2%', 
        '--border-color': '214.3 31.8% 91.4%', 
      },
      dark: {
        '--bg-primary': '222.2 84% 4.9%',
        '--bg-surface': '222.2 84% 4.9%',
        '--text-primary': '210 40% 98%',
        '--text-secondary': '215 20.2% 65.1%',
        '--accent-primary': '348 83% 50%',
        '--accent-secondary': '221 83% 53%',
        '--destructive': '0 62.8% 30.6%',
        '--border-color': '217.2 32.6% 17.5%',
      },
    },
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
