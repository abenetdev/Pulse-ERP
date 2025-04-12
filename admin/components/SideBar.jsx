import { Link } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
export default function SideBar() {
  const {aToken} = useContext(AdminContext)
  return (
    <div className="px-10 mt-14 z-[-1] fixed min-h-screen bg-gray-200">
      { aToken &&
      <div className="mt-10 gap-10 flex flex-col">
        <Link to={'/dashboard'} className="flex gap-2">
          <img src={assets.home_icon} alt="" />
          <h2>Dashboard</h2>
        </Link>
        <Link to={'/appointmnets'} className="flex gap-2">
          <img src={assets.appointment_icon} alt="" />
          <h2>Appointments</h2>
        </Link>
        <Link to={'/add-doctor'} className="flex gap-2">
          <img src={assets.add_icon} alt="" />
          <h2>Add Doctor</h2>
        </Link>
        <Link to={'/doctors-list'} className="flex gap-2">
          <img src={assets.people_icon} alt="" />
          <h2>Doctors List</h2>
        </Link>
      </div>
       }
    </div>
  );
}
