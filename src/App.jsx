import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import EventRequestsTable from './components/EventRequestsTable';
import Header from './components/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#e83e8c',
    },
    background: {
      default: '#121212',
      paper: '#1e1e30',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

function App() {
  const [selectedSection, setSelectedSection] = useState('Events');

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', p: '40px 40px', gap: 2 }}>
          <Sidebar selectedSection={selectedSection} onSectionChange={setSelectedSection} />
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              border: '2px solid #D175B6',
              borderRadius: '16px',
              height: '100%',
              boxShadow: '0px 0px 30px 0px #D175B633',
            }}
          >
            <EventRequestsTable />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
