import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {NameProvider} from './context/NameContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>
);
