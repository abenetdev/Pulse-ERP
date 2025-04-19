import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useState} from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(true)
  const [isProfileClick, setIsProfileClick] = useState(false);

  return (
    <div className="flex items-center justify-between mx-10 my-4">
      <div className="flex items-center">
      <img className="cursor-pointer" onClick={() => navigate('/')} src={assets.pulse} alt="" />
       <h2 className="text-2xl font-bold">Pulse</h2>
      </div>      
      <ul className="flex gap-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/doctors">All Doctors</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {token ? (
        <div className="flex gap-3 cursor-pointer relative">
          <div onClick={() => setIsProfileClick(!isProfileClick)} className="flex gap-3">
            <img width={40} className="rounded-full" src={assets.profile_pic} alt="" />
            <img width={15} src={assets.dropdown_icon} alt="" />
          </div>
          
          {isProfileClick && (
            <div className="absolute top-12 right-0 bg-blue-500 text-gray-100 rounded-lg p-3 w-40 shadow-lg">
              <p onClick={() => { navigate('/my-profile'); setIsProfileClick(false); }} className="hover:text-white cursor-pointer py-2">My Profile</p>
              <p onClick={() => { navigate('/my-appointment'); setIsProfileClick(false); }} className=" hover:text-white cursor-pointer py-2">My Appointment</p>
              <p onClick={() => setToken(false)} className=" hover:text-white cursor-pointer py-2">Logout</p>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => navigate('/login')} className="px-7 py-2 bg-blue-500 font-semibold text-white rounded-lg">
          Create account
        </button>
      )}
    </div>
  );
}
