import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider } from './providers/AppProviders';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
        <ToastContainer />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
