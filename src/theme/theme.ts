import { createTheme } from '@mui/material/styles';

// ─────────────────────────────────────────────────────────────────────────────
// Palette "Cô Ba Đỏ" – Vietnamese traditional wedding card
//   Deep red  #8B1C1C  |  Cream parchment  #F5EDD4
//   Dark teal #2D5A4A  |  Gold             #C9A040
// ─────────────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#c0392b',
      main: '#8B1C1C',   // deep red
      dark: '#5c0f0f',
      contrastText: '#F5EDD4',
    },
    secondary: {
      light: '#4a8a72',
      main: '#2D5A4A',   // dark teal/green border
      dark: '#1a3a2e',
      contrastText: '#F5EDD4',
    },
    background: {
      default: '#F5EDD4',  // cream parchment
      paper: '#FAF3E0',
    },
    text: {
      primary: '#1a0a0a',   // near black
      secondary: '#3d1a1a',
    },
    divider: 'rgba(141, 28, 28, 0.2)',
  },
  typography: {
    fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-oswald), "Arial Narrow", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'var(--font-oswald), "Arial Narrow", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'var(--font-oswald), "Arial Narrow", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    h4: {
      fontFamily: 'var(--font-playfair), Georgia, serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'var(--font-playfair), Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--font-playfair), Georgia, serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'var(--font-lato), "Helvetica Neue", sans-serif',
      letterSpacing: '0.02em',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: 'var(--font-lato), "Helvetica Neue", sans-serif',
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: 'var(--font-oswald), sans-serif',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    overline: {
      fontFamily: 'var(--font-lato), sans-serif',
      letterSpacing: '0.25em',
    },
    caption: {
      fontFamily: 'var(--font-dancing), cursive',
      fontSize: '1rem',
    },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '14px 40px',
          fontSize: '0.82rem',
          boxShadow: 'none',
          transition: 'all 0.25s ease',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(139,28,28,0.3)',
            transform: 'translateY(-1px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: '#8B1C1C',
            color: '#F5EDD4',
            '&:hover': { background: '#5c0f0f' },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: '2px',
            borderColor: '#8B1C1C',
            color: '#8B1C1C',
            '&:hover': {
              borderWidth: '2px',
              background: 'rgba(139,28,28,0.05)',
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '2px',
            background: 'rgba(255,248,230,0.8)',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8B1C1C',
              borderWidth: '2px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#c0392b',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#8B1C1C',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#c0392b',
          '&.Mui-checked': { color: '#8B1C1C' },
        },
      },
    },
  },
});

export default theme;
