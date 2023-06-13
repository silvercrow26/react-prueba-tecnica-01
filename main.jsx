// Importar createRoot desde el react-dom/client
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import './style.css'
// Obtener donde quiero renderizar mi aplicación
const root = createRoot(document.getElementById('app'))

// Renderizar app y transformar el archivo al jsx porque el js no tiene la capacidad para transpilar el codigo.
root.render(<App />)
