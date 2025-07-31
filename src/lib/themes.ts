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
        '--bg-primary': '#FEF2F2', // Red 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#7F1D1D', // Red 900
        '--text-secondary': '#EF4444', // Red 500
        '--accent-primary': '#DC2626', // Red 600
        '--accent-secondary': '#22C55E', // Green 500 (Complementary)
        '--destructive': '#B91C1C', // Red 700
        '--border-color': '#FCA5A5', // Red 300
      },
      dark: {
        '--bg-primary': '#450A0A', // Red 950
        '--bg-surface': '#7F1D1D', // Red 900
        '--text-primary': '#FEE2E2', // Red 100
        '--text-secondary': '#FECACA', // Red 200
        '--accent-primary': '#F87171', // Red 400
        '--accent-secondary': '#4ADE80', // Green 400 (Complementary)
        '--destructive': '#EF4444', // Red 500
        '--border-color': '#DC2626', // Red 600
      },
    },

    // 2. Orange Zest
    'Orange Zest': {
      swatchColor: '#EA580C', // Orange 600
      light: {
        '--bg-primary': '#FFF7ED', // Orange 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#7C2D12', // Orange 900
        '--text-secondary': '#F97316', // Orange 500
        '--accent-primary': '#EA580C', // Orange 600
        '--accent-secondary': '#22D3EE', // Cyan 400 (Complementary)
        '--destructive': '#C2410C', // Orange 700
        '--border-color': '#FDBA74', // Orange 300
      },
      dark: {
        '--bg-primary': '#431407', // Orange 950
        '--bg-surface': '#7C2D12', // Orange 900
        '--text-primary': '#FFEDD5', // Orange 100
        '--text-secondary': '#FED7AA', // Orange 200
        '--accent-primary': '#FB923C', // Orange 400
        '--accent-secondary': '#67E8F9', // Cyan 300 (Complementary)
        '--destructive': '#F97316', // Orange 500
        '--border-color': '#EA580C', // Orange 600
      },
    },

    // 3. Amber Glow
    'Amber Glow': {
      swatchColor: '#D97706', // Amber 600
      light: {
        '--bg-primary': '#FFFBEB', // Amber 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#78350F', // Amber 900
        '--text-secondary': '#F59E0B', // Amber 500
        '--accent-primary': '#D97706', // Amber 600
        '--accent-secondary': '#60A5FA', // Blue 400 (Complementary)
        '--destructive': '#B45309', // Amber 700
        '--border-color': '#FCD34D', // Amber 300
      },
      dark: {
        '--bg-primary': '#451A03', // Amber 950
        '--bg-surface': '#78350F', // Amber 900
        '--text-primary': '#FEF3C7', // Amber 100
        '--text-secondary': '#FDE68A', // Amber 200
        '--accent-primary': '#FBBF24', // Amber 400
        '--accent-secondary': '#93C5FD', // Blue 300 (Complementary)
        '--destructive': '#F59E0B', // Amber 500
        '--border-color': '#D97706', // Amber 600
      },
    },

    // 4. Yellow Sunshine
    'Yellow Sunshine': {
      swatchColor: '#CA8A04', // Yellow 600
      light: {
        '--bg-primary': '#FEFCE8', // Yellow 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#713F12', // Yellow 900
        '--text-secondary': '#EAB308', // Yellow 500
        '--accent-primary': '#CA8A04', // Yellow 600
        '--accent-secondary': '#A855F7', // Purple 400 (Complementary)
        '--destructive': '#A16207', // Yellow 700
        '--border-color': '#FDE047', // Yellow 300
      },
      dark: {
        '--bg-primary': '#422006', // Yellow 950
        '--bg-surface': '#713F12', // Yellow 900
        '--text-primary': '#FEF9C3', // Yellow 100
        '--text-secondary': '#FEF08A', // Yellow 200
        '--accent-primary': '#FACC15', // Yellow 400
        '--accent-secondary': '#C084FC', // Purple 300 (Complementary)
        '--destructive': '#EAB308', // Yellow 500
        '--border-color': '#CA8A04', // Yellow 600
      },
    },

    // 5. Lime Zest
    'Lime Zest': {
      swatchColor: '#65A30D', // Lime 600
      light: {
        '--bg-primary': '#F7FEE7', // Lime 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#3F6212', // Lime 900
        '--text-secondary': '#84CC16', // Lime 500
        '--accent-primary': '#65A30D', // Lime 600
        '--accent-secondary': '#EF4444', // Red 500 (Complementary)
        '--destructive': '#4D7C0F', // Lime 700
        '--border-color': '#BEF264', // Lime 300
      },
      dark: {
        '--bg-primary': '#1A2E05', // Lime 950
        '--bg-surface': '#3F6212', // Lime 900
        '--text-primary': '#F0FEE2', // Lime 100
        '--text-secondary': '#E0FFBD', // Lime 200
        '--accent-primary': '#A3E635', // Lime 400
        '--accent-secondary': '#F87171', // Red 400 (Complementary)
        '--destructive': '#84CC16', // Lime 500
        '--border-color': '#65A30D', // Lime 600
      },
    },

    // 6. Forest Green
    'Forest Green': {
      swatchColor: '#16A34A', // Green 600
      light: {
        '--bg-primary': '#F0FDF4', // Green 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#14532D', // Green 900
        '--text-secondary': '#22C55E', // Green 500
        '--accent-primary': '#16A34A', // Green 600
        '--accent-secondary': '#3B82F6', // Blue 500 (Complementary)
        '--destructive': '#15803D', // Green 700
        '--border-color': '#86EFAC', // Green 300
      },
      dark: {
        '--bg-primary': '#052E16', // Green 950
        '--bg-surface': '#14532D', // Green 900
        '--text-primary': '#DCFCE7', // Green 100
        '--text-secondary': '#BBF7D0', // Green 200
        '--accent-primary': '#4ADE80', // Green 400
        '--accent-secondary': '#60A5FA', // Blue 400 (Complementary)
        '--destructive': '#22C55E', // Green 500
        '--border-color': '#16A34A', // Green 600
      },
    },

    // 7. Emerald Depth
    'Emerald Depth': {
      swatchColor: '#059669', // Emerald 600
      light: {
        '--bg-primary': '#ECFDF5', // Emerald 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#064E3B', // Emerald 900
        '--text-secondary': '#10B981', // Emerald 500
        '--accent-primary': '#059669', // Emerald 600
        '--accent-secondary': '#F59E0B', // Amber 500 (Complementary)
        '--destructive': '#047857', // Emerald 700
        '--border-color': '#6EE7B7', // Emerald 300
      },
      dark: {
        '--bg-primary': '#022C22', // Emerald 950
        '--bg-surface': '#064E3B', // Emerald 900
        '--text-primary': '#D1FAE5', // Emerald 100
        '--text-secondary': '#A7F3D0', // Emerald 200
        '--accent-primary': '#34D399', // Emerald 400
        '--accent-secondary': '#FBBF24', // Amber 400 (Complementary)
        '--destructive': '#10B981', // Emerald 500
        '--border-color': '#059669', // Emerald 600
      },
    },

    // 8. Teal Tranquility
    'Teal Tranquility': {
      swatchColor: '#0D9488', // Teal 600
      light: {
        '--bg-primary': '#F0FDFA', // Teal 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#0F766E', // Teal 900
        '--text-secondary': '#14B8A6', // Teal 500
        '--accent-primary': '#0D9488', // Teal 600
        '--accent-secondary': '#EC4899', // Pink 500 (Complementary)
        '--destructive': '#0F766E', // Teal 700
        '--border-color': '#5EEAD4', // Teal 300
      },
      dark: {
        '--bg-primary': '#042F2E', // Teal 950
        '--bg-surface': '#0F766E', // Teal 900
        '--text-primary': '#E0F2F7', // Teal 100
        '--text-secondary': '#99F6E4', // Teal 200
        '--accent-primary': '#2DD4BF', // Teal 400
        '--accent-secondary': '#F472B6', // Pink 400 (Complementary)
        '--destructive': '#14B8A6', // Teal 500
        '--border-color': '#0D9488', // Teal 600
      },
    },

    // 9. Cyan Energy
    'Cyan Energy': {
      swatchColor: '#06B6D4', // Cyan 600
      light: {
        '--bg-primary': '#F0F9FF', // Cyan 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#0891B2', // Cyan 900
        '--text-secondary': '#06B6D4', // Cyan 500
        '--accent-primary': '#06B6D4', // Cyan 600
        '--accent-secondary': '#F43F5E', // Rose 500 (Complementary)
        '--destructive': '#0E7490', // Cyan 700
        '--border-color': '#67E8F9', // Cyan 300
      },
      dark: {
        '--bg-primary': '#082F49', // Cyan 950
        '--bg-surface': '#0891B2', // Cyan 900
        '--text-primary': '#ECFEFF', // Cyan 100
        '--text-secondary': '#A5F3FC', // Cyan 200
        '--accent-primary': '#22D3EE', // Cyan 400
        '--accent-secondary': '#FB7185', // Rose 400 (Complementary)
        '--destructive': '#06B6D4', // Cyan 500
        '--border-color': '#06B6D4', // Cyan 600
      },
    },

    // 10. Sky Serenity
    'Sky Serenity': {
      swatchColor: '#0284C7', // Sky 600
      light: {
        '--bg-primary': '#F0F9FF', // Sky 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#075985', // Sky 900
        '--text-secondary': '#0EA5E9', // Sky 500
        '--accent-primary': '#0284C7', // Sky 600
        '--accent-secondary': '#C084FC', // Purple 300 (Complementary)
        '--destructive': '#0369A1', // Sky 700
        '--border-color': '#7DD3FC', // Sky 300
      },
      dark: {
        '--bg-primary': '#0C4A6E', // Sky 950
        '--bg-surface': '#075985', // Sky 900
        '--text-primary': '#E0F2FE', // Sky 100
        '--text-secondary': '#BAE6FD', // Sky 200
        '--accent-primary': '#38BDF8', // Sky 400
        '--accent-secondary': '#A855F7', // Purple 400 (Complementary)
        '--destructive': '#0EA5E9', // Sky 500
        '--border-color': '#0284C7', // Sky 600
      },
    },

    // 11. Bold Blue
    'Bold Blue': {
      swatchColor: '#2563EB', // Blue 600
      light: {
        '--bg-primary': '#EFF6FF', // Blue 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#1E3A8A', // Blue 900
        '--text-secondary': '#3B82F6', // Blue 500
        '--accent-primary': '#2563EB', // Blue 600
        '--accent-secondary': '#EC4899', // Pink 500 (Complementary)
        '--destructive': '#1D4ED8', // Blue 700
        '--border-color': '#93C5FD', // Blue 300
      },
      dark: {
        '--bg-primary': '#172554', // Blue 950
        '--bg-surface': '#1E3A8A', // Blue 900
        '--text-primary': '#DBEAFE', // Blue 100
        '--text-secondary': '#BFDBFE', // Blue 200
        '--accent-primary': '#60A5FA', // Blue 400
        '--accent-secondary': '#F472B6', // Pink 400 (Complementary)
        '--destructive': '#3B82F6', // Blue 500
        '--border-color': '#2563EB', // Blue 600
      },
    },

    // 12. Indigo Depth
    'Indigo Depth': {
      swatchColor: '#4F46E5', // Indigo 600
      light: {
        '--bg-primary': '#EEF2FF', // Indigo 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#312E81', // Indigo 900
        '--text-secondary': '#6366F1', // Indigo 500
        '--accent-primary': '#4F46E5', // Indigo 600
        '--accent-secondary': '#F59E0B', // Amber 500 (Complementary)
        '--destructive': '#4338CA', // Indigo 700
        '--border-color': '#A5B4FC', // Indigo 300
      },
      dark: {
        '--bg-primary': '#1E1B4B', // Indigo 950
        '--bg-surface': '#312E81', // Indigo 900
        '--text-primary': '#E0E7FF', // Indigo 100
        '--text-secondary': '#C7D2FE', // Indigo 200
        '--accent-primary': '#818CF8', // Indigo 400
        '--accent-secondary': '#FBBF24', // Amber 400 (Complementary)
        '--destructive': '#6366F1', // Indigo 500
        '--border-color': '#4F46E5', // Indigo 600
      },
    },

    // 13. Violet Dream
    'Violet Dream': {
      swatchColor: '#7C3AED', // Violet 600
      light: {
        '--bg-primary': '#F5F3FF', // Violet 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#4C1D95', // Violet 900
        '--text-secondary': '#8B5CF6', // Violet 500
        '--accent-primary': '#7C3AED', // Violet 600
        '--accent-secondary': '#FACC15', // Yellow 400 (Complementary)
        '--destructive': '#6D28D9', // Violet 700
        '--border-color': '#C4B5FD', // Violet 300
      },
      dark: {
        '--bg-primary': '#2E1065', // Violet 950
        '--bg-surface': '#4C1D95', // Violet 900
        '--text-primary': '#EDE9FE', // Violet 100
        '--text-secondary': '#DDD6FE', // Violet 200
        '--accent-primary': '#A78BFA', // Violet 400
        '--accent-secondary': '#FDE047', // Yellow 300 (Complementary)
        '--destructive': '#8B5CF6', // Violet 500
        '--border-color': '#7C3AED', // Violet 600
      },
    },

    // 14. Royal Purple
    'Royal Purple': {
      swatchColor: '#9333EA', // Purple 600
      light: {
        '--bg-primary': '#FAF5FF', // Purple 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#581C87', // Purple 900
        '--text-secondary': '#A855F7', // Purple 500
        '--accent-primary': '#9333EA', // Purple 600
        '--accent-secondary': '#22D3EE', // Cyan 400 (Complementary)
        '--destructive': '#7E22CE', // Purple 700
        '--border-color': '#D8B4FE', // Purple 300
      },
      dark: {
        '--bg-primary': '#3B0764', // Purple 950
        '--bg-surface': '#581C87', // Purple 900
        '--text-primary': '#F3E8FF', // Purple 100
        '--text-secondary': '#E9D5FF', // Purple 200
        '--accent-primary': '#C084FC', // Purple 400
        '--accent-secondary': '#67E8F9', // Cyan 300 (Complementary)
        '--destructive': '#A855F7', // Purple 500
        '--border-color': '#9333EA', // Purple 600
      },
    },

    // 15. Fuchsia Burst
    'Fuchsia Burst': {
      swatchColor: '#C026D3', // Fuchsia 600
      light: {
        '--bg-primary': '#FAF5FF', // Fuchsia 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#701A75', // Fuchsia 900
        '--text-secondary': '#D946EF', // Fuchsia 500
        '--accent-primary': '#C026D3', // Fuchsia 600
        '--accent-secondary': '#2DD4BF', // Teal 400 (Complementary)
        '--destructive': '#A21CAF', // Fuchsia 700
        '--border-color': '#E879F9', // Fuchsia 300
      },
      dark: {
        '--bg-primary': '#4A044E', // Fuchsia 950
        '--bg-surface': '#701A75', // Fuchsia 900
        '--text-primary': '#FCE7F6', // Fuchsia 100
        '--text-secondary': '#FBCFE8', // Fuchsia 200
        '--accent-primary': '#E879F9', // Fuchsia 400
        '--accent-secondary': '#5EEAD4', // Teal 300 (Complementary)
        '--destructive': '#D946EF', // Fuchsia 500
        '--border-color': '#C026D3', // Fuchsia 600
      },
    },

    // 16. Vibrant Pink
    'Vibrant Pink': {
      swatchColor: '#DB2777', // Pink 600
      light: {
        '--bg-primary': '#FFF1F2', // Pink 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#831843', // Pink 900
        '--text-secondary': '#EC4899', // Pink 500
        '--accent-primary': '#DB2777', // Pink 600
        '--accent-secondary': '#22D3EE', // Cyan 400 (Complementary)
        '--destructive': '#BE185D', // Pink 700
        '--border-color': '#FBCFE8', // Pink 300
      },
      dark: {
        '--bg-primary': '#500724', // Pink 950
        '--bg-surface': '#831843', // Pink 900
        '--text-primary': '#FCE7F3', // Pink 100
        '--text-secondary': '#FBCFE8', // Pink 200
        '--accent-primary': '#F472B6', // Pink 400
        '--accent-secondary': '#67E8F9', // Cyan 300 (Complementary)
        '--destructive': '#EC4899', // Pink 500
        '--border-color': '#DB2777', // Pink 600
      },
    },

    // 17. Rose Garden
    'Rose Garden': {
      swatchColor: '#E11D48', // Rose 600
      light: {
        '--bg-primary': '#FFF1F2', // Rose 50
        '--bg-surface': '#FFFFFF',
        '--text-primary': '#881337', // Rose 900
        '--text-secondary': '#F43F5E', // Rose 500
        '--accent-primary': '#E11D48', // Rose 600
        '--accent-secondary': '#3B82F6', // Blue 500 (Complementary)
        '--destructive': '#BE123C', // Rose 700
        '--border-color': '#FDA4AF', // Rose 300
      },
      dark: {
        '--bg-primary': '#450A0A', // Rose 950 (Same as Red for harmony)
        '--bg-surface': '#881337', // Rose 900
        '--text-primary': '#FFE4E6', // Rose 100
        '--text-secondary': '#FECDD3', // Rose 200
        '--accent-primary': '#FB7185', // Rose 400
        '--accent-secondary': '#60A5FA', // Blue 400 (Complementary)
        '--destructive': '#F43F5E', // Rose 500
        '--border-color': '#E11D48', // Rose 600
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
