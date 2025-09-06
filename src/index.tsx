import { render } from 'react-dom';
import React from 'react';
import { Counter } from './components/Counter';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/themeProvider';

render(
  <BrowserRouter>
    <ThemeProvider> 
      <App />,
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
