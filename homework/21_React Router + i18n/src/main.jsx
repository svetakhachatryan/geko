import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <I18nextProvider>
    <App />
  </I18nextProvider>

)
