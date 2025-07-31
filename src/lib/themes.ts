
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
    'Orange Zest': {
      swatchColor: '#EA580C',
      light: { '--primary': '25 95% 53%', '--accent': '190 81% 54%', },
      dark: { '--primary': '25 95% 53%', '--accent': '190 81% 54%', },
    },
    'Amber Glow': {
      swatchColor: '#D97706',
      light: { '--primary': '39 92% 51%', '--accent': '217 91% 60%', },
      dark: { '--primary': '39 92% 51%', '--accent': '217 91% 60%', },
    },
    'Yellow Sunshine': {
      swatchColor: '#CA8A04',
      light: { '--primary': '48 96% 47%', '--accent': '262 88% 66%', },
      dark: { '--primary': '48 96% 47%', '--accent': '262 88% 66%', },
    },
    'Lime Zest': {
      swatchColor: '#65A30D',
      light: { '--primary': '74 85% 35%', '--accent': '0 84.2% 60.2%', },
      dark: { '--primary': '74 85% 35%', '--accent': '0 84.2% 60.2%', },
    },
    'Forest Green': {
      swatchColor: '#16A34A',
      light: { '--primary': '145 74% 39%', '--accent': '221 83% 53%', },
      dark: { '--primary': '145 74% 39%', '--accent': '221 83% 53%', },
    },
    'Emerald Depth': {
      swatchColor: '#059669',
      light: { '--primary': '160 91% 30%', '--accent': '39 92% 51%', },
      dark: { '--primary': '160 91% 30%', '--accent': '39 92% 51%', },
    },
    'Teal Tranquility': {
      swatchColor: '#0D9488',
      light: { '--primary': '175 84% 32%', '--accent': '336 82% 59%', },
      dark: { '--primary': '175 84% 32%', '--accent': '336 82% 59%', },
    },
    'Cyan Energy': {
      swatchColor: '#06B6D4',
      light: { '--primary': '187 95% 42%', '--accent': '351 89% 60%', },
      dark: { '--primary': '187 95% 42%', '--accent': '351 89% 60%', },
    },
    'Indigo Depth': {
      swatchColor: '#4F46E5',
      light: { '--primary': '242 79% 58%', '--accent': '39 92% 51%', },
      dark: { '--primary': '242 79% 58%', '--accent': '39 92% 51%', },
    },
    'Violet Dream': {
      swatchColor: '#7C3AED',
      light: { '--primary': '255 83% 63%', '--accent': '53 98% 50%', },
      dark: { '--primary': '255 83% 63%', '--accent': '53 98% 50%', },
    },
    'Royal Purple': {
      swatchColor: '#9333EA',
      light: { '--primary': '271 83% 56%', '--accent': '190 81% 54%', },
      dark: { '--primary': '271 83% 56%', '--accent': '190 81% 54%', },
    },
    'Fuchsia Burst': {
      swatchColor: '#C026D3',
      light: { '--primary': '296 79% 49%', '--accent': '173 58% 39%', },
      dark: { '--primary': '296 79% 49%', '--accent': '173 58% 39%', },
    },
    'Vibrant Pink': {
      swatchColor: '#DB2777',
      light: { '--primary': '327 79% 51%', '--accent': '190 81% 54%', },
      dark: { '--primary': '327 79% 51%', '--accent': '190 81% 54%', },
    },
    'Rose Garden': {
      swatchColor: '#E11D48',
      light: { '--primary': '348 83% 50%', '--accent': '221 83% 53%', },
      dark: { '--primary': '348 83% 50%', '--accent': '221 83% 53%', },
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
      swatchColor: '#DC2626',
      light: {
        ...skySerenityTheme.light,
        '--primary': '358 75% 59%',
        '--primary-foreground': '0 0% 98%',
        '--accent': '142 71% 45%',
        '--ring': '358 75% 59%',
      },
      dark: {
        ...skySerenityTheme.dark,
        '--primary': '358 75% 59%',
        '--primary-foreground': '0 0% 98%',
        '--accent': '142 71% 45%',
        '--ring': '358 75% 59%',
      },
    },
    'Sky Serenity': skySerenityTheme,
    'Bold Blue': {
      swatchColor: '#2563EB',
      light: {
        ...skySerenityTheme.light,
        '--primary': '224 82% 52%',
        '--accent': '336 82% 59%',
        '--ring': '224 82% 52%',
      },
      dark: {
        ...skySerenityTheme.dark,
        '--primary': '224 82% 52%',
        '--accent': '336 82% 59%',
        '--ring': '224 82% 52%',
      },
    },
    ...otherPrimaryColorThemes,
  },
  daisyUIThemes: {
    'Forest': {
      swatchColor: '#1EB854',
      light: { ...skySerenityTheme.light, '--primary': '158 64% 52%', '--primary-foreground': '0 0% 100%', '--secondary': '215 28% 17%', '--secondary-foreground': '0 0% 100%', '--accent': '138 69% 61%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '158 64% 52%', },
      dark: { ...skySerenityTheme.dark, '--primary': '158 64% 52%', '--primary-foreground': '0 0% 100%', '--secondary': '215 28% 17%', '--secondary-foreground': '0 0% 100%', '--accent': '138 69% 61%', '--accent-foreground': '0 0% 0%', '--background': '215 28% 17%', '--foreground': '0 0% 100%', '--ring': '158 64% 52%', },
    },
    'Cyberpunk': {
      swatchColor: '#FF7ED3',
       light: { ...skySerenityTheme.light, '--primary': '259 94% 71%', '--primary-foreground': '0 0% 0%', '--secondary': '174 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '314 100% 64%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '259 94% 71%', },
      dark: { ...skySerenityTheme.dark, '--primary': '259 94% 71%', '--primary-foreground': '0 0% 0%', '--secondary': '174 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '314 100% 64%', '--accent-foreground': '0 0% 0%', '--background': '225 24% 12%', '--foreground': '0 0% 100%', '--ring': '259 94% 71%', },
    },
    'Cupcake': {
        swatchColor: '#F08080',
        light: { ...skySerenityTheme.light, '--primary': '0 82% 72%', '--primary-foreground': '0 0% 0%', '--secondary': '300 13% 94%', '--secondary-foreground': '0 0% 0%', '--accent': '187 63% 60%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '0 82% 72%', },
        dark: { ...skySerenityTheme.dark, '--primary': '0 82% 72%', '--primary-foreground': '0 0% 0%', '--secondary': '300 13% 94%', '--secondary-foreground': '0 0% 0%', '--accent': '187 63% 60%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '0 82% 72%', },
    },
    'Bumblebee': { 
      swatchColor: '#FDD835', 
      light: { ...skySerenityTheme.light, '--primary': '50 98% 60%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 0%', '--secondary-foreground': '0 0% 100%', '--accent': '50 98% 60%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '50 98% 60%', },
      dark: { ...skySerenityTheme.dark, '--primary': '50 98% 60%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 0%', '--secondary-foreground': '0 0% 100%', '--accent': '50 98% 60%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '50 98% 60%', },
    },
    'Emerald': { 
      swatchColor: '#36D399', 
      light: { ...skySerenityTheme.light, '--primary': '160 63% 52%', '--primary-foreground': '0 0% 0%', '--secondary': '260 16% 94%', '--secondary-foreground': '0 0% 0%', '--accent': '341 93% 63%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '160 63% 52%', },
      dark: { ...skySerenityTheme.dark, '--primary': '160 63% 52%', '--primary-foreground': '0 0% 0%', '--secondary': '260 16% 94%', '--secondary-foreground': '0 0% 0%', '--accent': '341 93% 63%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '160 63% 52%', },
    },
    'Corporate': { 
      swatchColor: '#4C6EF5', 
      light: { ...skySerenityTheme.light, '--primary': '230 89% 64%', '--primary-foreground': '0 0% 100%', '--secondary': '219 22% 21%', '--secondary-foreground': '0 0% 100%', '--accent': '160 63% 52%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '230 89% 64%', },
      dark: { ...skySerenityTheme.dark, '--primary': '230 89% 64%', '--primary-foreground': '0 0% 100%', '--secondary': '219 22% 21%', '--secondary-foreground': '0 0% 100%', '--accent': '160 63% 52%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '230 89% 64%', },
    },
    'Synthwave': { 
      swatchColor: '#FF7ED3',
      light: { ...skySerenityTheme.light, '--primary': '279 83% 62%', '--primary-foreground': '0 0% 100%', '--secondary': '174 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '201 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '279 83% 62%', },
      dark: { ...skySerenityTheme.dark, '--primary': '279 83% 62%', '--primary-foreground': '0 0% 100%', '--secondary': '174 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '201 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '241 33% 13%', '--foreground': '0 0% 100%', '--ring': '279 83% 62%', },
    },
    'Retro': { 
      swatchColor: '#EF4444', 
      light: { ...skySerenityTheme.light, '--primary': '350 82% 60%', '--primary-foreground': '0 0% 100%', '--secondary': '187 63% 60%', '--secondary-foreground': '0 0% 0%', '--accent': '48 96% 47%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '350 82% 60%', },
      dark: { ...skySerenityTheme.dark, '--primary': '350 82% 60%', '--primary-foreground': '0 0% 100%', '--secondary': '187 63% 60%', '--secondary-foreground': '0 0% 0%', '--accent': '48 96% 47%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '350 82% 60%', },
    },
    'Valentine': { 
      swatchColor: '#FF6D9B', 
      light: { ...skySerenityTheme.light, '--primary': '342 100% 71%', '--primary-foreground': '0 0% 100%', '--secondary': '259 94% 71%', '--secondary-foreground': '0 0% 100%', '--accent': '174 100% 50%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '342 100% 71%', },
      dark: { ...skySerenityTheme.dark, '--primary': '342 100% 71%', '--primary-foreground': '0 0% 100%', '--secondary': '259 94% 71%', '--secondary-foreground': '0 0% 100%', '--accent': '174 100% 50%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '342 100% 71%', },
    },
    'Halloween': { 
      swatchColor: '#FF7000', 
      light: { ...skySerenityTheme.light, '--primary': '28 100% 50%', '--primary-foreground': '0 0% 100%', '--secondary': '271 83% 56%', '--secondary-foreground': '0 0% 100%', '--accent': '145 74% 39%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '28 100% 50%', },
      dark: { ...skySerenityTheme.dark, '--primary': '28 100% 50%', '--primary-foreground': '0 0% 100%', '--secondary': '271 83% 56%', '--secondary-foreground': '0 0% 100%', '--accent': '145 74% 39%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '28 100% 50%', },
    },
    'Garden': { 
      swatchColor: '#1A531A', 
      light: { ...skySerenityTheme.light, '--primary': '120 54% 21%', '--primary-foreground': '0 0% 100%', '--secondary': '120 18% 39%', '--secondary-foreground': '0 0% 100%', '--accent': '120 18% 39%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '120 54% 21%', },
      dark: { ...skySerenityTheme.dark, '--primary': '120 54% 21%', '--primary-foreground': '0 0% 100%', '--secondary': '120 18% 39%', '--secondary-foreground': '0 0% 100%', '--accent': '120 18% 39%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '120 54% 21%', },
    },
    'Aqua': { 
      swatchColor: '#00FFFF', 
      light: { ...skySerenityTheme.light, '--primary': '180 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 0%', '--accent': '255 83% 63%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '180 100% 50%', },
      dark: { ...skySerenityTheme.dark, '--primary': '180 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 0%', '--accent': '255 83% 63%', '--accent-foreground': '0 0% 100%', '--background': '222 84% 4.9%', '--foreground': '0 0% 100%', '--ring': '180 100% 50%', },
    },
    'Lofi': { 
      swatchColor: '#808080', 
      light: { ...skySerenityTheme.light, '--primary': '0 0% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 33%', '--secondary-foreground': '0 0% 100%', '--accent': '0 0% 27%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '0 0% 50%', },
      dark: { ...skySerenityTheme.dark, '--primary': '0 0% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 33%', '--secondary-foreground': '0 0% 100%', '--accent': '0 0% 27%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '0 0% 50%', },
    },
    'Pastel': { 
      swatchColor: '#FFB6C1', 
      light: { ...skySerenityTheme.light, '--primary': '351 100% 86%', '--primary-foreground': '0 0% 0%', '--secondary': '160 100% 86%', '--secondary-foreground': '0 0% 0%', '--accent': '255 83% 63%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '351 100% 86%', },
      dark: { ...skySerenityTheme.dark, '--primary': '351 100% 86%', '--primary-foreground': '0 0% 0%', '--secondary': '160 100% 86%', '--secondary-foreground': '0 0% 0%', '--accent': '255 83% 63%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '351 100% 86%', },
    },
    'Fantasy': { 
      swatchColor: '#A855F7', 
      light: { ...skySerenityTheme.light, '--primary': '262 88% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 100%', '--accent': '187 95% 42%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '262 88% 66%', },
      dark: { ...skySerenityTheme.dark, '--primary': '262 88% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 100%', '--accent': '187 95% 42%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '262 88% 66%', },
    },
    'Wireframe': { 
      swatchColor: '#AFAFAF', 
      light: { ...skySerenityTheme.light, '--primary': '0 0% 69%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 85%', '--secondary-foreground': '0 0% 0%', '--accent': '0 0% 40%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '0 0% 69%', },
      dark: { ...skySerenityTheme.dark, '--primary': '0 0% 69%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 85%', '--secondary-foreground': '0 0% 0%', '--accent': '0 0% 40%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '0 0% 69%', },
    },
    'Black': { 
      swatchColor: '#000000', 
      light: { ...skySerenityTheme.light, '--primary': '0 0% 0%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 0%', '--secondary-foreground': '0 0% 100%', '--accent': '0 0% 0%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '0 0% 0%', },
      dark: { ...skySerenityTheme.dark, '--primary': '0 0% 100%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 100%', '--secondary-foreground': '0 0% 0%', '--accent': '0 0% 100%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 0%', '--foreground': '0 0% 100%', '--ring': '0 0% 100%', },
    },
    'Luxury': { 
      swatchColor: '#A67C00', 
      light: { ...skySerenityTheme.light, '--primary': '46 100% 33%', '--primary-foreground': '0 0% 100%', '--secondary': '46 38% 18%', '--secondary-foreground': '0 0% 100%', '--accent': '46 25% 86%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '46 100% 33%', },
      dark: { ...skySerenityTheme.dark, '--primary': '46 100% 33%', '--primary-foreground': '0 0% 100%', '--secondary': '46 38% 18%', '--secondary-foreground': '0 0% 100%', '--accent': '46 25% 86%', '--accent-foreground': '0 0% 0%', '--background': '221 39% 11%', '--foreground': '0 0% 100%', '--ring': '46 100% 33%', },
    },
    'Dracula': { 
      swatchColor: '#FF6E99',
      light: { ...skySerenityTheme.light, '--primary': '342 100% 71%', '--primary-foreground': '0 0% 0%', '--secondary': '262 88% 66%', '--secondary-foreground': '0 0% 0%', '--accent': '160 91% 30%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '342 100% 71%', },
      dark: { ...skySerenityTheme.dark, '--primary': '342 100% 71%', '--primary-foreground': '0 0% 0%', '--secondary': '262 88% 66%', '--secondary-foreground': '0 0% 0%', '--accent': '160 91% 30%', '--accent-foreground': '0 0% 100%', '--background': '231 15% 18%', '--foreground': '0 0% 100%', '--ring': '342 100% 71%', },
    },
    'CMYK': { 
      swatchColor: '#00FFFF',
      light: { ...skySerenityTheme.light, '--primary': '180 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '300 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '60 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '180 100% 50%', },
      dark: { ...skySerenityTheme.dark, '--primary': '180 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '300 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '60 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '180 100% 50%', },
    },
    'Autumn': { 
      swatchColor: '#D87A00',
      light: { ...skySerenityTheme.light, '--primary': '33 100% 42%', '--primary-foreground': '0 0% 100%', '--secondary': '9 84% 60%', '--secondary-foreground': '0 0% 100%', '--accent': '358 75% 59%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '33 100% 42%', },
      dark: { ...skySerenityTheme.dark, '--primary': '33 100% 42%', '--primary-foreground': '0 0% 100%', '--secondary': '9 84% 60%', '--secondary-foreground': '0 0% 100%', '--accent': '358 75% 59%', '--accent-foreground': '0 0% 100%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '33 100% 42%', },
    },
    'Business': { 
      swatchColor: '#1C3D5A',
      light: { ...skySerenityTheme.light, '--primary': '208 53% 23%', '--primary-foreground': '0 0% 100%', '--secondary': '208 39% 39%', '--secondary-foreground': '0 0% 100%', '--accent': '145 74% 39%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '208 53% 23%', },
      dark: { ...skySerenityTheme.dark, '--primary': '208 53% 23%', '--primary-foreground': '0 0% 100%', '--secondary': '208 39% 39%', '--secondary-foreground': '0 0% 100%', '--accent': '145 74% 39%', '--accent-foreground': '0 0% 100%', '--background': '222 84% 4.9%', '--foreground': '0 0% 100%', '--ring': '208 53% 23%', },
    },
    'Acid': { 
      swatchColor: '#6BFF00', 
      light: { ...skySerenityTheme.light, '--primary': '93 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 0%', '--accent': '0 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '93 100% 50%', },
      dark: { ...skySerenityTheme.dark, '--primary': '93 100% 50%', '--primary-foreground': '0 0% 0%', '--secondary': '327 79% 51%', '--secondary-foreground': '0 0% 0%', '--accent': '0 100% 50%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '93 100% 50%', },
    },
    'Lemonade': { 
      swatchColor: '#FFFA37',
      light: { ...skySerenityTheme.light, '--primary': '58 100% 61%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 90%', '--secondary-foreground': '0 0% 0%', '--accent': '195 49% 64%', '--accent-foreground': '0 0% 0%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '58 100% 61%', },
      dark: { ...skySerenityTheme.dark, '--primary': '58 100% 61%', '--primary-foreground': '0 0% 0%', '--secondary': '0 0% 90%', '--secondary-foreground': '0 0% 0%', '--accent': '195 49% 64%', '--accent-foreground': '0 0% 0%', '--background': '224 24% 14%', '--foreground': '0 0% 100%', '--ring': '58 100% 61%', },
    },
    'Night': { 
      swatchColor: '#0F0F1A', 
      light: { ...skySerenityTheme.light, '--primary': '240 16% 9%', '--primary-foreground': '0 0% 100%', '--secondary': '180 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '259 94% 71%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '240 16% 9%', },
      dark: { ...skySerenityTheme.dark, '--primary': '240 16% 9%', '--primary-foreground': '0 0% 100%', '--secondary': '180 100% 50%', '--secondary-foreground': '0 0% 0%', '--accent': '259 94% 71%', '--accent-foreground': '0 0% 100%', '--background': '240 16% 9%', '--foreground': '0 0% 100%', '--ring': '240 16% 9%', },
    },
    'Coffee': { 
      swatchColor: '#6F4E37', 
      light: { ...skySerenityTheme.light, '--primary': '25 34% 32%', '--primary-foreground': '0 0% 100%', '--secondary': '46 100% 33%', '--secondary-foreground': '0 0% 100%', '--accent': '0 0% 0%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '25 34% 32%', },
      dark: { ...skySerenityTheme.dark, '--primary': '25 34% 32%', '--primary-foreground': '0 0% 100%', '--secondary': '46 100% 33%', '--secondary-foreground': '0 0% 100%', '--accent': '0 0% 100%', '--accent-foreground': '0 0% 0%', '--background': '228 10% 12%', '--foreground': '0 0% 100%', '--ring': '25 34% 32%', },
    },
    'Winter': { 
      swatchColor: '#ADD8E6', 
      light: { ...skySerenityTheme.light, '--primary': '195 53% 79%', '--primary-foreground': '0 0% 0%', '--secondary': '210 40% 96.1%', '--secondary-foreground': '0 0% 0%', '--accent': '224 82% 52%', '--accent-foreground': '0 0% 100%', '--background': '0 0% 100%', '--foreground': '0 0% 0%', '--ring': '195 53% 79%', },
      dark: { ...skySerenityTheme.dark, '--primary': '195 53% 79%', '--primary-foreground': '0 0% 0%', '--secondary': '210 40% 96.1%', '--secondary-foreground': '0 0% 0%', '--accent': '224 82% 52%', '--accent-foreground': '0 0% 100%', '--background': '217 33% 18%', '--foreground': '0 0% 100%', '--ring': '195 53% 79%', },
    },
  },
};
