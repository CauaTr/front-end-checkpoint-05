import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/Home/HomePage.tsx'
import SobrePage from './pages/Sobre/SobrePage.tsx'
import AgendamentosPage from './pages/Agendamentos/AgendamentosPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/sobre', element: <SobrePage /> },
      { path: '/agendamentos', element: <AgendamentosPage /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
