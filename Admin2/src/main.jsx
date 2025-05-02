import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "../context/AdminContext.jsx";
import DoctorsContextProvider from "../context/DoctorsContext.jsx";
import AppContextProvider from "../context/AppContext.jsx";
import {Slide, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorsContextProvider>
        <AppContextProvider>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
          <Toaster
            position="top-center"
            richColors
            closeButton={false}
            toastOptions={{
              className: "bg-slate-900 text-slate-50",
              duration: 2000,
              style: {
                background: "#333",
                color: "#fff",
              },
            }}/>
        </AppContextProvider>
      </DoctorsContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
)
