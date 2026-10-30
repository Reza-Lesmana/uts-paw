
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Mengambil alamat halaman yang disimpan oleh 404.html
const redirect = sessionStorage.getItem('redirect')

if (redirect) {
  sessionStorage.removeItem('redirect')

  window.history.replaceState(
    null,
    '',
    `${import.meta.env.BASE_URL}${redirect}`
  )
}

// Router sengaja diletakkan di sini, bukan di App.jsx, agar uji otomatis
// dosen bisa merender <App /> di dalam MemoryRouter.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
