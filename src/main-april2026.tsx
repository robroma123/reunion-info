import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { April2026Page } from './pages/April2026Page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <April2026Page />
  </StrictMode>,
)
