import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider } from './providers/AppProviders';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppProvider>
  </React.StrictMode>
);
