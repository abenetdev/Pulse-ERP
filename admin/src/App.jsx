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
export default function App() {
  const {aToken} = useContext(AdminContext)
  return aToken ? (
    <div className=""> 
      <NavBar/>
      <div className="flex relative w-full bg-green-500">
        <SideBar/>
        <div className="">
          <Routes>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/appointmnets'} element={<Appointments/>}/>
            <Route path={'/add-doctor'} element={<AddDoctor/>}/>
            <Route path={'/doctors-list'} element={<DoctorsList/>}/>
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login/> 
    </>
  )
}
