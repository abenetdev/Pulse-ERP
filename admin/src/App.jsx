import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AdminContext } from "../context/AdminContext";
import AdminAuthProtector from "../context/AdminAuthProtector";

// Components
import NavBar from "../Admincomponents/NavBar";
import SideBar from "../Admincomponents/SideBar";

// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/admin/Dashboard";
import Appointments from "../pages/admin/Appointment";
import DoctorsList from "../pages/admin/DoctorsList";
import AddDoctor from "../pages/admin/AddDoctor";

export default function App() {
  const { aToken } = useContext(AdminContext);

  const adminRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/appointments", element: <Appointments /> },
    { path: "/add-doctor", element: <AddDoctor /> },
    { path: "/doctors-list", element: <DoctorsList /> },
  ];

  if (!aToken) {
    return (
      <Routes>
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-[1fr_6fr]">
        <SideBar />
        <div>
          <Routes>
            {adminRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<AdminAuthProtector>{element}</AdminAuthProtector>}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}