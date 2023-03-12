import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h3: {
      fontSize: 'large',
      fontWeight: 400,
    },
    h4: {
      fontSize: 'large',
      fontWeight: 600,
      textTransform: 'uppercase'
    },
    h5: {
      fontSize: 'larger',
      fontWeight: 600,
    },
    h6: {
      color: '#1a1a1a !important',
      textTransform: 'uppercase',
      fontSize: 'medium',
      fontWeight: 400
    },
    body2: {
      fontSize: 'small',
      fontWeight: 100
    },
    subtitle1: {
      fontSize: 'small',
      color: 'gray',
      fontWeight: '400'
    },
    subtitle2: {
      fontSize: 'medium',
      color: 'gray',
      fontWeight: '400',
    },
    caption: {
      fontSize: 'x-small',
      color: 'gray'
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    //  activates additional checks and warnings for its descendants
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </React.StrictMode>,
  )