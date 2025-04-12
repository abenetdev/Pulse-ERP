import axios from "axios";
import { useContext, useState } from "react"
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
export default function Login() {
   const[loginRole, setLoginRole] = useState("Admin");
   const[email, setEmail] = useState('');
   const[password, setPassword] = useState('')
   const {setAToken, backendUrl} = useContext(AdminContext);
   console.log(setAToken);
   
   //console.log(email, password);
   const handleAdminAuthentication = async (e) => {
    e.preventDefault();
    try {
       if(loginRole === "Admin"){
        const {data} = await axios.post(backendUrl + 'api/login/admin', {email, password});
        if(data.success){
          //console.log(data.token);
          toast.success("logged in successfully")
          localStorage.setItem("aToken", data.token)
          setAToken(data.token); 
        } else {
          toast.error("invalid creadentials")
         }
       } 
    } catch (error) {
      console.log(error);
      //toast.error("invalid creadentials 2")
    }
   }
  return (
    <form onSubmit={handleAdminAuthentication} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border border-gray-300 text-zinc-600 text-sm rounded-xl shadow-lg">
        <p className="ml-[-70px]">{loginRole === "Admin" ? "Welcome Admin" : "Welcome! Doctor"}</p>
        <div  className="w-full">
          <p>Email</p>
          <input 
            className="border border-zinc-300 rounded-md w-full p-2 mt-1"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div  className="w-full">
          <p>Password</p>
          <input 
            className="border border-zinc-300 rounded-md w-full p-2 mt-1"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="px-14 cursor-pointer py-3 w-full rounded-2xl text-white bg-blue-600">Login</button>
        {
          loginRole === "Admin"? (
             <h2>Doctor login? <span onClick={() => setLoginRole("Doctor")} className="text-blue-500 cursor-pointer">Click here.</span></h2>
          ): (
            <h2>Admin login? <span onClick={() => setLoginRole("Admin")} className="text-blue-500 cursor-pointer">Click here.</span></h2>
          )
        }
      </div>
    </form>
  )
}
