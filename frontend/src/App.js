// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chat from './components/Chat';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffbc0f', // Customize your primary color
    },
    secondary: {
      main: '#1976d2', // Customize your secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Chat />
      </div>
    </ThemeProvider>
  );
}

export default App;
