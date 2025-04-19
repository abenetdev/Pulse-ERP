//import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
//pages
import Dashboard from "../pages/admin/Dashboard"
import Appointments from "../pages/admin/Appointment"
import DoctorsList from "../pages/admin/DoctorsList"
import AddDoctor from "../pages/admin/AddDoctor";
//guard
import AdminAuthProtector from "../context/AdminAuthProtector";
export default function App() {
  const {aToken} = useContext(AdminContext);
  return aToken ? (
    <div className=""> 
      <NavBar/>
      <div className="grid grid-cols-[1fr_6fr]">
        <SideBar/>
        <div className="">
          <Routes>
            <Route path={'/dashboard'} element={<AdminAuthProtector><Dashboard/></AdminAuthProtector>}/>
            <Route path={'/appointmnets'} element={<AdminAuthProtector><Appointments/></AdminAuthProtector>}/>
            <Route path={'/add-doctor'} element={<AdminAuthProtector><AddDoctor/></AdminAuthProtector>}/>
            <Route path={'/doctors-list'} element={<AdminAuthProtector><DoctorsList/></AdminAuthProtector>}/>
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Routes>
        <Route path={'/admin/login'} element={<Login/>}/>
      </Routes>
    </>
  )
}
