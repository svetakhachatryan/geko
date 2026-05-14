import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '/i18n.js'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(
  <I18nextProvider>
    <App />
  </I18nextProvider>
)
