import { render } from 'react-dom';
import React from 'react';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/themeProvider';
import  './shared/config/i18n/i18n'
import {ErrorBoundary} from "app/providers/errorBoundary";

render(
  <BrowserRouter>
      <ErrorBoundary>
    <ThemeProvider>
      <App />,
    </ThemeProvider>
      </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
