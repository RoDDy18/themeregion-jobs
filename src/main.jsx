import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './css/main.css'
import './css/responsive.css'
import './css/font-awesome.min.css'
import './css/bootstrap.min.css'
import './css/slidr.css'
import './css/slidr.css'
import './css/icofont.css'
import './css/presets/preset1.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
