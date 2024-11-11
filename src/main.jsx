import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/route'
import AuthProvider from './Context/AuthProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={route} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
