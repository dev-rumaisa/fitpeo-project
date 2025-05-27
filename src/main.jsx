import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#93c5fd',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);