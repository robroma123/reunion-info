import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TeamPage } from './pages/TeamPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TeamPage />
  </StrictMode>,
)
