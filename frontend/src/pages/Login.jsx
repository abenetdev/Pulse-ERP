import { useState } from "react"


export default function Login() {
  const[authState, setAuthState] = useState('signup');
  const[username, setUserName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border border-gray-300 text-zinc-600 text-sm rounded-xl shadow-lg">
        {authState === "signup" ? 
          <h2 className="text-2xl font-semibold ml-[-150px]">Create Account</h2>
        : <h2 className="text-2xl font-semibold ml-[-250px]">Login</h2>}
        <p className="ml-[-70px]">{authState === "signup" ? "Please sign up to book your appointment" : "Please login to book your appointment"}</p>
        {authState === "signup" && <div className="w-full">
          <p>Full Name</p>
          <input 
            className="border border-zinc-300 rounded-md w-full p-2 mt-1"
            type="name" 
            value={username} 
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>}
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
        <button className="px-14 py-3 w-full rounded-2xl text-white bg-primary">
          {authState === "signup" ? "Create Account": "Login"}
        </button>
        {
          authState === "signup"? 
          <div className="w-full flex gap-2">
           <span>Already have an account?</span>
           <p onClick={() => setAuthState("login")} className="font-semibold cursor-pointer text-blue-600">Login</p>
          </div>
          : 
          <div className="w-full flex gap-2">
           <span>Create a new account?</span>
           <p onClick={() => setAuthState("signup")} className="font-semibold cursor-pointer text-blue-600">Create account</p>
          </div>
        }
      </div>
    </form>
  )
}
