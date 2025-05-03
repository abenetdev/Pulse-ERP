import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from './context/DoctorsContext.jsx'
import UserAuthContextProvider from './context/UserAuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </AppContextProvider>
  </BrowserRouter>,
)
