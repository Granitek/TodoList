import React from 'react';
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './components/Routing';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
