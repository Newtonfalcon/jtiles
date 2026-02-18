import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import FloatingWhatsApp from '../components/Whatsapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <FloatingWhatsApp />
    </BrowserRouter>
  </StrictMode>,
)
