import { useContext } from "react"
import {assets} from "../assets/assets_admin/assets"
import { AdminContext } from "../context/AdminContext"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function NavBar() {
    const {aToken, setAToken} = useContext(AdminContext);
    const navigate = useNavigate();
    const handleAdminLogOut = () => {
        toast.success("logged out successfully")
        navigate('/')
        aToken && setAToken(""),
        localStorage.removeItem("aToken")
    }
  return (
    <div className="flex fixed w-full bg-white justify-between p-4 border-b border-gray-400">
        <div className="relative">
            <img src={assets.admin_logo} width={150} height={150} />
            <h1 className="border absolute top-3 right-[-43px] px-1 rounded-4xl w-fit text-[11px]  border-gray-500 text-black">admin</h1>
        </div>
        <div>
            <button onClick={handleAdminLogOut} className="px-4 cursor-pointer py-1 text-white bg-blue-600 rounded-4xl">Logout</button>
        </div>
    </div>
  )
}
