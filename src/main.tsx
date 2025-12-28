import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App.tsx';
import { store, persistor } from './redux/store';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6BDEA0', // Light mint green for buttons/CTAs
      contrastText: '#0E3840',
    },
    secondary: {
      main: '#4E7D8A', // Lighter teal for secondary elements
    },
    background: {
      default: '#0E3840', // Dark teal/blue-green primary background
      paper: '#1E4B5A', // Darker blue-teal for cards/paper
    },
    text: {
      primary: '#FFFFFF', // White for headings
      secondary: '#6BDEA0', // Mint green for links/secondary text
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h5: {
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h6: {
      fontWeight: 600,
      color: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(107, 222, 160, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #6BDEA0 0%, #5BCA90 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5BCA90 0%, #4BB880 100%)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& fieldset': {
              borderColor: 'rgba(107, 222, 160, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(107, 222, 160, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6BDEA0',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: '#6BDEA0',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, #1E4B5A 0%, #2A5A6A 100%)',
          borderRadius: 12,
          border: '1px solid rgba(107, 222, 160, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1E4B5A 0%, #2A5A6A 100%)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1E4B5A 0%, #2A5A6A 100%)',
          '& .MuiTableCell-head': {
            color: '#FFFFFF',
            fontWeight: 600,
            borderBottom: '2px solid rgba(107, 222, 160, 0.2)',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(107, 222, 160, 0.1)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, #1E4B5A 0%, #2A5A6A 100%)',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: '#FFFFFF',
            '&.Mui-selected': {
              backgroundColor: '#6BDEA0',
              color: '#0E3840',
              '&:hover': {
                backgroundColor: '#5BCA90',
              },
            },
            '&:hover': {
              backgroundColor: 'rgba(107, 222, 160, 0.2)',
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.MuiAlert-standardError': {
            backgroundColor: 'rgba(211, 47, 47, 0.15)',
            color: '#ff6b6b',
            border: '1px solid rgba(211, 47, 47, 0.3)',
          },
          '&.MuiAlert-standardSuccess': {
            backgroundColor: 'rgba(76, 175, 80, 0.15)',
            color: '#6BDEA0',
            border: '1px solid rgba(107, 222, 160, 0.3)',
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiAlert-root': {
            minWidth: { xs: '90%', sm: 'auto' },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#6BDEA0',
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
