import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Estilos
import './index.css'

//Componente App
import App from './App.jsx'

//Chakra
import { Provider } from "/src/components/ui/provider"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
)
