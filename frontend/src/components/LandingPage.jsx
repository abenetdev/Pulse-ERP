import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row rounded-lg px-6 md:px-10 lg:px-20 bg-primary">
        {/* ------> Left Side */}
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-7 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
            <p onClick={() => navigate("#speciality")} className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
               Book Appointment <br /> with Trusted Doctors
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" /> schedule your spot!</p>
            </div>
            <a className="flex relative left-[-140px] items-center gap-2 bg-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href=""
            >Book appointment 
            <img className="w-3" src={assets.arrow_icon} alt=""/></a>
        </div>
        {/* ------> Right Side */}
        <div>
            <img className="w-full bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
        </div>
    </div>
  )
}
