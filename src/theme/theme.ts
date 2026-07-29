import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c32a29',   // Đỏ son Cô Ba Đỏ
      dark: '#8e1c1b',
      light: '#e56362',
      contrastText: '#f8f3e0',
    },
    secondary: {
      main: '#542e08',   // Nâu đậm vintage
      dark: '#351c04',
      light: '#7a4612',
    },
    background: {
      default: '#f8f3e0', // Giấy kem Cô Ba Đỏ
      paper: '#efe6d0',
    },
    text: {
      primary: '#542e08',
      secondary: 'rgba(84, 46, 8, 0.88)',
    },
  },
  typography: {
    fontFamily: 'var(--font-playfair), "Lora", "Times New Roman", serif',
    h1: {
      fontFamily: 'var(--font-oswald), sans-serif',
      fontWeight: 700,
      color: '#c32a29',
    },
    h2: {
      fontFamily: 'var(--font-oswald), sans-serif',
      fontWeight: 700,
      color: '#c32a29',
    },
    h3: {
      fontFamily: 'var(--font-oswald), sans-serif',
      fontWeight: 600,
      color: '#c32a29',
    },
    h4: {
      fontFamily: 'var(--font-playfair), Georgia, serif',
      fontWeight: 700,
      color: '#542e08',
    },
    body1: {
      fontFamily: 'var(--font-lato), sans-serif',
      color: 'rgba(84, 46, 8, 0.88)',
    },
    body2: {
      fontFamily: 'var(--font-lato), sans-serif',
      color: 'rgba(84, 46, 8, 0.75)',
    },
  },
  shape: { borderRadius: 8 },
});

export default theme;
