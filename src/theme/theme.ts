import { createTheme } from '@mui/material/styles';

// ─────────────────────────────────────────────────────────────────────────────
// Palette cảm hứng từ chungdoi.com – "Hoa Mộc Ivory"
//   Nền kem trắng ấm áp (ivory), điểm nhấn lavender nhạt & vàng đồng tinh tế
//   Không dùng gradient chói; mọi màu đều nhẹ nhàng, thanh lịch
// ─────────────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#e8dff0',   // lavender rất nhạt
      main: '#9b84b4',    // lavender trung tính – không chói
      dark: '#6b5a8a',    // tím trầm sang trọng
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#f5efe0',   // kem vàng nhạt
      main: '#c9a96e',    // vàng đồng ấm
      dark: '#a07840',    // vàng đồng đậm
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf7f2', // ivory kem ấm – không trắng trơn
      paper: '#fffdf8',   // trắng ngà
    },
    text: {
      primary: '#3d2f1e',   // nâu cổ điển – dễ đọc, không chói
      secondary: '#7a6652', // nâu nhạt ấm áp
    },
    divider: 'rgba(155, 132, 180, 0.15)',
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
      letterSpacing: '0.015em',
      lineHeight: 1.85,
      color: '#3d2f1e',
    },
    body2: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      letterSpacing: '0.01em',
      color: '#7a6652',
    },
    button: {
      fontFamily: '"Lato", sans-serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
    overline: {
      fontFamily: '"Lato", sans-serif',
      letterSpacing: '0.25em',
    },
    caption: {
      fontFamily: '"Lato", sans-serif',
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
          fontSize: '0.82rem',
          boxShadow: 'none',
          transition: 'all 0.35s ease',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(155, 132, 180, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #b09cc8 0%, #9b84b4 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #9b84b4 0%, #7a6698 100%)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: '1.5px',
            borderColor: '#9b84b4',
            color: '#6b5a8a',
            '&:hover': {
              borderWidth: '1.5px',
              background: 'rgba(155, 132, 180, 0.06)',
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            background: 'rgba(255,253,248,0.8)',
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#9b84b4',
              borderWidth: '1.5px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#b09cc8',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#9b84b4',
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
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#c2b0d8',
          '&.Mui-checked': {
            color: '#9b84b4',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(155, 132, 180, 0.12)',
        },
      },
    },
  },
});

export default theme;
