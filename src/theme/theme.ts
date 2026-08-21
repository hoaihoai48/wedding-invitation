import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    vintage: {
      cream: string;
      paper: string;
      envelopeBack: string;
      envelopeFront: string;
      gold: string;
      pastelPurple: string;
      purpleBorder: string;
      darkBrown: string;
      woodDark: string;
      woodLight: string;
      accentTeal: string;
      successGreen: string;
      borderDark: string;
      overlayDark: string;
    };
  }
  interface PaletteOptions {
    vintage?: {
      cream?: string;
      paper?: string;
      envelopeBack?: string;
      envelopeFront?: string;
      gold?: string;
      pastelPurple?: string;
      purpleBorder?: string;
      darkBrown?: string;
      woodDark?: string;
      woodLight?: string;
      accentTeal?: string;
      successGreen?: string;
      borderDark?: string;
      overlayDark?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b82323',   // Deep Red Tân Thời
      dark: '#8e1c1b',
      light: '#c32a29',
      contrastText: '#fdfbf7',
    },
    secondary: {
      main: '#28201c',   // Dark Brown Retro
      dark: '#1e3a34',   // Teal Accent
      light: '#542e08',
    },
    background: {
      default: '#fdfbf7', // Vintage Cream Paper
      paper: '#f5efe0',
    },
    text: {
      primary: '#28201c',
      secondary: '#542e08',
    },
    vintage: {
      cream: '#fdfbf7',
      paper: '#f5efe0',
      envelopeBack: '#fdfbf7',
      envelopeFront: '#f7f2e7',
      gold: '#d4af37',
      pastelPurple: '#d8c4e8',
      purpleBorder: 'rgba(216, 196, 232, 0.5)',
      darkBrown: '#28201c',
      woodDark: '#241a12',
      woodLight: '#4a3428',
      accentTeal: '#1e3a34',
      successGreen: '#2e7d32',
      borderDark: 'rgba(38, 30, 27, 0.2)',
      overlayDark: 'rgba(25, 18, 15, 0.75)',
    },
  },
  typography: {
    fontFamily: '"Lora", "Baskerville", serif',
    h1: {
      fontFamily: '"SVN-HC Marvin Visions", sans-serif',
      fontWeight: 700,
      color: '#b82323',
    },
    h2: {
      fontFamily: '"SVN-HC Marvin Visions", sans-serif',
      fontWeight: 700,
      color: '#b82323',
    },
    h3: {
      fontFamily: '"SVN-HC Marvin Visions", sans-serif',
      fontWeight: 600,
      color: '#b82323',
    },
    h4: {
      fontFamily: '"Lora", Georgia, serif',
      fontWeight: 700,
      color: '#28201c',
    },
    body1: {
      fontFamily: '"Lora", serif',
      color: '#28201c',
    },
    body2: {
      fontFamily: '"Lora", serif',
      color: '#542e08',
    },
  },
  shape: { borderRadius: 8 },
});

export default theme;
