import { Link } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";
import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
export default function SideBar() {
  const {aToken} = useContext(AdminContext);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  return (
    <div className="px-6 relative  pt-20 min-h-screen bg-gray-200">
      <button onClick={() => setisSideBarOpen(true)} className="right-4 absolute">x</button>
      { aToken &&
      <div className="mt-10 fixed">
        <Link to={'/dashboard'} className="flex mb-6 gap-2">
          <img src={assets.home_icon} alt="" />
          <h2 className="">Dashboard</h2>
        </Link>
        <Link to={'/appointmnets'} className="flex mb-6 gap-2">
          <img src={assets.appointment_icon} alt="" />
          <h2>Appointments</h2>
        </Link>
        <Link to={'/add-doctor'} className="flex mb-6 gap-2">
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
