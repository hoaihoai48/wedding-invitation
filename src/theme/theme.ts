import { createTheme } from '@mui/material/styles';

// "Tím Pastel" – elegant pastel purple wedding palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#f3e8ff',   // lavender mist
      main: '#c084fc',    // pastel purple
      dark: '#9333ea',    // deep violet
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fce7f3',   // blush rose mist
      main: '#f9a8d4',    // pastel pink
      dark: '#ec4899',    // deep rose
      contrastText: '#ffffff',
    },
    background: {
      default: '#fdf8ff', // very soft lavender white
      paper: '#ffffff',
    },
    text: {
      primary: '#3b1f5e',   // deep romantic purple
      secondary: '#7c3aed', // violet
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Playfair Display", "Georgia", serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      letterSpacing: '0.02em',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Lato", sans-serif',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 36px',
          fontSize: '0.85rem',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(192, 132, 252, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#c084fc',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#c084fc',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
