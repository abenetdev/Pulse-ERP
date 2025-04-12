import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/my-appointment" element={<MyAppointment/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
