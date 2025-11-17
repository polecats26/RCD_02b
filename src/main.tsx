import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContextProvider } from './shared/AppContextProvider.tsx'
import AppRoutes from './shared/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  </StrictMode>,
)
